export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, company, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Nama, Email, dan Pesan wajib diisi.' });
    }

    // 1. KIRIM NOTIFIKASI INSTAN KE TELEGRAM
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && chatId) {
      const telegramMessage = 
        `📬 *PESAN BARU DARI PORTOFOLIO*\n\n` +
        `👤 *Nama:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `🏢 *Perusahaan:* ${company || '-'}\n\n` +
        `💬 *Pesan:*\n${message}`;

      try {
        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        });
      } catch (tgError) {
        console.error('Gagal kirim notifikasi Telegram:', tgError);
      }
    }

    // 2. KIRIM ARSIP EMAIL VIA BREVO
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Portofolio Contact Form',
          email: 'hello@aykeldaely.my.id',
        },
        to: [
          {
            email: 'hello@aykeldaely.my.id',
            name: 'Aykel Daely',
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Portofolio] Pesan Baru dari ${name}`,
        htmlContent: `
          <h3>Pesan Baru dari Website Portofolio</h3>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email Pengirim:</strong> ${email}</p>
          <p><strong>Perusahaan/Instansi:</strong> ${company || '-'}</p>
          <p><strong>Pesan:</strong></p>
          <blockquote style="background: #f4f4f4; padding: 10px; border-left: 4px solid #10b981;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        `,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Pesan berhasil terkirim!' });
    } else {
      const errorData = await response.json();
      console.error('Brevo Error:', errorData);
      return res.status(500).json({ message: 'Gagal mengirim email via Brevo.' });
    }
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
}
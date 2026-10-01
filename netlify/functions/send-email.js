exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Nama, Email, dan Pesan wajib diisi.' }),
      };
    }

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
      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Pesan berhasil terkirim!' }),
      };
    } else {
      const errorData = await response.json();
      console.error('Brevo Error:', errorData);
      return {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Gagal mengirim email via Brevo.' }),
      };
    }
  } catch (error) {
    console.error('Server Error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Terjadi kesalahan pada server.' }),
    };
  }
};
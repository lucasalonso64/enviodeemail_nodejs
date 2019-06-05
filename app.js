const {getTransport, sendEmail } = require('./send-mail')

const config = {
    service: 'gmail',
    email: 'teste@gmail.com',
    password: 'teste123'

}
const destination = {
    remetente:'teste@gmail.com',
    email: 'teste@gmail.com',
    subject: 'Testando'
}

const html = `<h1> Testando envio de e-mail`

const transport = getTransport(config)

sendEmail(transport)(destination, html)
    .then(response => console.log(response))
    .catch(err => console.log(err))
const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    })

    server.route(routes);

    await server.start()

    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()

//ssh -i "notes-api-webserver.pem" ubuntu@ec2-13-212-10-68.ap-southeast-1.compute.amazonaws.com
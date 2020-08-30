const core = require('@actions/core');
const https = require("https");


// most @actions toolkit packages have async methods
async function run() {
    try {
        const space_url = core.getInput('space_url');
        const access_token = core.getInput('access_token');
        const channel_id = core.getInput('channel_id');
        const message = core.getInput('message');
        core.info(`Sending message to teams channel: ${channel_id}`);



        const options = {
            host: space_url,
            port: 443,
            path: `/api/http/chats/channels/${channel_id}/messages`,
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        };

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                core.setOutput('response', d);
            })
        })

        req.on('error', (error) => {
            core.error(error)
        })

        req.write(JSON.stringify({"text":message}))
        req.end()

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "your-ftp-username",
  password: "your-ftp-password",
  host: "your-ftp-host",
  port: 21,
  localRoot: __dirname + "/dist/",
  remoteRoot: "/path/to/your/webserver/directory/",
  include: ["*"],
  deleteRemote: false,
  forcePasv: true
};

ftpDeploy
  .deploy(config)
  .then(res => console.log("finished:", res))
  .catch(err => console.log(err));

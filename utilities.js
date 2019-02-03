class Utilities {
  pad(target) { // eslint-disable-line class-methods-use-this
    return target < 10 ? `0${target}` : target;
  }

  log(message, withTimeStamp = true) {
    const date = new Date();
    const dateStamp = `${date.getUTCFullYear()}:${this.pad(1 + date.getUTCMonth())}:${this.pad(date.getUTCDate())}`;
    const timeStamp = `${this.pad(date.getUTCHours())}:${this.pad(date.getUTCMinutes())}:${this.pad(date.getUTCSeconds())}`;
    return process.stdout.write((withTimeStamp) ? `\t${dateStamp}:${timeStamp} UTC ${message}\n` : `\t${message}\n`);
  }

  stringReverse(string) {
    this.result = string.split('').reverse().join('');
    return this.result;
  }
}
module.exports = Utilities;

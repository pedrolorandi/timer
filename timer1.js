const input = process.argv;
const alarms = input.slice(2).map((alarm) => {
  return alarm * 1000;
});

for (let alarm of alarms) {
  if (alarm > 0 && alarm !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, alarm);
  }
}
fetch('https://hook.eu1.make.com/qkihklahoumeem7f5yqwlp5i3640trml', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ nombre: 'Test' })
}).then(res => res.text()).then(console.log).catch(console.error);

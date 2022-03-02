(function (params) {
  var term = new Terminal({
    rendererType: 'canvas', //渲染类型
    rows: 40, //行数
    convertEol: true, //启用时，光标将设置为下一行的开头
    scrollback: 10, //终端中的回滚量
    disableStdin: false, //是否应禁用输入。
    cursorStyle: 'underline', //光标样式
    cursorBlink: true, //光标闪烁
    theme: {
      foreground: '#72F0FF', //字体
      background: '#060101', //背景色
      cursor: 'help', //设置光标
    },
  });
  term.open(document.getElementById('terminal'));
  term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  // term.loadAddon(new WebLinksAddon.WebLinksAddon());
  function runFakeTerminal() {
    if (term._initialized) {
      return;
    }

    term._initialized = true;

    term.prompt = () => {
      term.write('\r\n$ ');
    };

    term.writeln('Welcome to xterm.js');
    term.writeln(
      'This is a local terminal emulation, without a real terminal in the back-end.'
    );
    term.writeln('Type some keys and commands to play around.');
    term.writeln('');
    term.prompt();

    term.onKey((e) => {
      console.log(e);
      const ev = e.domEvent;
      const printable =
        !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.keyCode === 13) {
        term.prompt();
      } else if (ev.keyCode === 8) {
        if (term._core.buffer.x > 2) {
          term.write('\b \b');
        }
      } else if (printable) {
        term.write(e.key);
      }
    });
  }
  runFakeTerminal();

})()

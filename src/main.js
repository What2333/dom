
const div = dom.create('<tr><td></td></tr>');
console.log(div);

dom.after(test, div);
//console.log(dom.after(test, div));

//dom.before(test, div);


const div3 = dom.create('<div id="parent"></div>');
console.log(div3);
dom.wrap(test, div3);

const div4 = dom.create("<div>你好</div>")
//console.log(div4);
dom.append(div3, div4);

//设置title
dom.attr(test, 'title', '设置title')

//读取
const title = dom.attr(test, 'title')
console.log(`title:${title}`);


//修改文本
dom.text(test, "哈哈哈");

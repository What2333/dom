window.dom = {
    create(string) {
        const container = document.createElement("template");
        //trim  去掉两边（td）的空格（文本）
        container.innerHTML = string.trim();
        //这样才能返回第一个孩子
        return container.content.firstChild;
    },
    //新增弟弟       
    //在什么节点上新增     新增的节点
    after(node, node2) {
        //找到父节点  调用父节点的insertBefore  
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    //新增哥哥
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    //新增儿子
    append(parent, node) {
        parent.appendChild(node)
    },
    //新增爸爸  在一个节点的外面  加一个爸爸
    wrap(node, parent) {
        //先变为兄弟关系
        dom.before(node, parent)
        //在转化为父子关系
        dom.append(parent, node)
    },
    //删除一个节点
    remove(node) {//新的  node.remove()
        //让爸爸删除这个儿子
        node.parentNode.removeChild(node)
        //还可以保留这个节点的引用
        return node
    },
    //给我一个节点  我把这个节点的所有儿子给删除了    简单的删除node.innerHTML = '' 这样外面不能引用了
    empty(node) {
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))   //删除一个孩子  node.length会实时发生变化
            x = node.firstChild
        }
        return array
    },
    //attribute缩写
    //我要把
    attr(node, name, value) { // 重载    （根据参数不同，写不同的代码就叫重载）
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.getAttribute(name)
        }
    },
    text(node, string) { // 适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string
            } else {
                node.textContent = string
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else if (arguments.length === 1) {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            // dom.style(div, 'color', 'red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                // dom.style(div, 'color')
                return node.style[name]
            } else if (name instanceof Object) {
                // dom.style(div, {color: 'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },

};
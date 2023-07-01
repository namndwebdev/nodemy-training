var levels = [
    {
        helpTitle: 'Lấy ra các thẻ theo loại.',
        selectorName: 'Type Selector',
        doThis: 'Lấy ra những cái đĩa',
        selector: 'plate',
        syntax: 'A',
        help: 'Loại thẻ được phân biệt bởi tên. Ví dụ, thẻ <tag>p</tag> và <tag>div</tag> là hai loại thẻ khác nhau.',
        examples: [
            '<strong>div</strong> Lấy ra toàn bộ thẻ <tag>div</tag>.',
            '<strong>p</strong> Lấy ra toàn bộ thẻ <tag>p</tag>.',
        ],
        boardMarkup: '\n    <plate/>\n    <plate/>\n    ',
    },
    {
        doThis: 'Lấy ra những hộp cơm bento',
        selector: 'bento',
        syntax: 'A',
        helpTitle: 'Lấy ra các thẻ theo loại',
        selectorName: 'Type Selector',
        help: 'Loại thẻ được phân biệt bởi tên. Ví dụ, thẻ <tag>p</tag>  là hai loại thẻ khác nhau.',
        examples: [
            '<strong>div</strong> Lấy ra toàn bộ thẻ <tag>div</tag>.',
            '<strong>p</strong> Lấy ra toàn bộ thẻ <tag>p</tag>.',
        ],
        boardMarkup: '\n    <bento/>\n    <plate/>\n    <bento/>\n    ',
    },
    {
        doThis: 'Lấy ra cái đĩa "fancy"',
        selector: '#fancy',
        selectorName: 'ID Selector',
        helpTitle: 'Lấy ra thẻ bằng ID',
        syntax: '#id',
        help: 'Lấy ra một thẻ với một <strong>id</strong> cụ thể. Có thể kết hợp giữa ID và loại thẻ.',
        examples: [
            '<strong>#cool</strong> Lấy ra bất kì thẻ nào thẻ có <strong>id="cool"</strong>',
            '<strong>ul#long</strong> Lấy ra thẻ <tag>ul</tag> có <strong> id="long"</strong>',
        ],
        boardMarkup: '\n    <plate id="fancy"/>\n    <plate/>\n    <bento/>\n    ',
    },
    {
        helpTitle: 'Lấy ra một thẻ nằm bên trong một thẻ khác.',
        selectorName: 'Descendant Selector',
        doThis: 'Lấy ra quả táo nằm trên cái đĩa',
        selector: 'plate apple',
        syntax: 'A&nbsp;&nbsp;B',
        help: 'Lấy ra toàn bộ thẻ <strong>B</strong> bên trong thẻ <strong>A</strong>. <strong>B</strong> được gọi là là họ hàng hoặc huyết thống.',
        examples: [
            '<strong>p&nbsp;&nbsp;strong</strong> Lấy ra toàn bộ thẻ <tag>strong</tag> nằm bên trong bất cứ thẻ <tag>p</tag>.',
            '<strong>#fancy&nbsp;&nbsp;span</strong> Lấy ra tất cả thẻ <tag>span</tag> nằm bên trong thẻ có <strong>id="fancy"</strong>.',
        ],
        boardMarkup: '\n    <bento/>\n    <plate>\n      <apple/>\n    </plate>\n    <apple/>\n    ',
    },
    {
        doThis: ' Lấy quả dưa ra khỏi đĩa "fancy"',
        selector: '#fancy pickle',
        helpTitle: 'Kết hợp Descendant & ID Selectors',
        syntax: '#id&nbsp;&nbsp;A',
        help: 'You can combine any selector with the descendent selector.',
        examples: [
            '<strong>#cool&nbsp;span</strong> Lấy ra tất cả thẻ <tag>span</tag> nằm bên trong các thẻ có <strong>id="cool"</strong>',
        ],
        boardMarkup:
            '\n    <bento>\n    <orange/>\n    </bento>\n    <plate id="fancy">\n      <pickle/>\n    </plate>\n    <plate>\n      <pickle/>\n    </plate>\n    ',
    },
    {
        doThis: 'Lấy ra các quả táo nhỏ',
        selector: '.small',
        selectorName: 'Class Selector',
        helpTitle: 'Lấy ra các thẻ dựa vào class',
        syntax: '.classname',
        help: 'Class selector sẽ lấy ra toàn bộ các thẻ có cùng giá trị class. Các thẻ chỉ có duy nhất 1 ID nhưng có rất nhiều class.',
        examples: ['<strong>.neato</strong> Lấy ra toàn bộ các thẻ có <strong>class="neato"</strong>'],
        boardMarkup:
            '\n    <apple/>\n    <apple class="small"/>\n    <plate>\n      <apple class="small"/>\n    </plate>\n    <plate/>\n    ',
    },
    {
        doThis: 'Lấy ra các quả cam nhỏ',
        selector: 'orange.small',
        helpTitle: 'Kết hợp Class Selector',
        syntax: 'A.className',
        help: 'Có thể kết hợp class selector với các loại selector khác, ví dụ như loại thẻ.',
        examples: [
            '<strong>ul.important</strong> Lấy ra toàn bộ thẻ <tag>ul</tag> ul có <strong>class="important"</strong>',
            '<strong>#big.wide</strong> Lấy ra toàn bộ thẻ vừa có <strong>id="big"</strong> vừa có <strong>class="wide"</strong>',
        ],
        boardMarkup:
            '\n    <apple/>\n    <apple class="small"/>\n    <bento>\n      <orange class="small"/>\n    </bento>\n    <plate>\n      <orange/>\n    </plate>\n    <plate>\n      <orange class="small"/>\n    </plate>',
    },
    {
        doThis: 'Lấy các quả cam nhỏ ra khỏi các hộp cơm bento',
        selector: 'bento orange.small',
        syntax: 'Luyện tập',
        helpTitle: 'You can do it...',
        help: 'Kết hợp kiến thức trước đó để vượt qua thử thách này!',
        boardMarkup:
            '\n    <bento>\n      <orange/>\n    </bento>\n    <orange class="small"/>\n    <bento>\n      <orange class="small"/>\n    </bento>\n    <bento>\n      <apple class="small"/>\n    </bento>\n    <bento>\n      <orange class="small"/>\n    </bento>\n    ',
    },
    {
        doThis: 'Lấy ra tất cả các đĩa và hộp cơm bento',
        selector: 'plate,bento',
        selectorName: 'Comma Combinator',
        helpTitle: 'Combine, selectors, with... commas!',
        syntax: 'A, B',
        help: 'Sử dụng dấu phẩy để ngăn cách selector, có thể chọn ra được nhiều selector cùng lúc.',
        examples: [
            '<strong>p, .fun</strong> Lấy ra tất cả các thẻ <tag>p</tag> và các thẻ có <strong>class="fun"</strong>',
            '<strong>a, p, div</strong> Lấy ra tất cả các thẻ <tag>a</tag>, thẻ <tag>p</tag> và thẻ <tag>div</tag>',
        ],
        boardMarkup:
            '\n    <pickle class="small"/>\n    <pickle/>\n    <plate>\n      <pickle/>\n    </plate>\n    <bento>\n      <pickle/>\n    </bento>\n    <plate>\n      <pickle/>\n    </plate>\n    <pickle/>\n    <pickle class="small"/>\n    ',
    },
    {
        doThis: 'Lấy mọi thứ ra khỏi bàn',
        selector: '*',
        selectorName: 'Universal Selector',
        helpTitle: 'Bạn có thể lấy ra toàn bộ các thẻ!',
        syntax: '*',
        help: 'You can select all elements with the universal selector! ',
        examples: ['<strong>p *</strong> Lấy ra toàn bộ các thẻ trong thẻ <tag>p</tag>.'],
        boardMarkup:
            '\n    <apple/>\n    <plate>\n      <orange class="small" />\n    </plate>\n    <bento/>\n    <bento>\n      <orange/>\n    </bento>\n    <plate id="fancy"/>\n    ',
    },
    {
        doThis: 'Lấy ra mọi thứ nằm trên đĩa',
        selector: 'plate *',
        syntax: 'A&nbsp;&nbsp;*',
        helpTitle: 'Kết hợp Universal Selector',
        help: 'Lấy ra toàn bộ các thẻ bên trong thẻ <strong>A</strong>.',
        examples: [
            '<strong>p *</strong>Lấy ra toàn bộ các thẻ bên trong thẻ <tag>p</tag> elements.',
            '<strong>ul.fancy *</strong> Lấy ra toàn bộ các thẻ bên trong thẻ <tag>ul</tag> có <tag>class="fancy"</tag>.',
        ],
        boardMarkup:
            '\n    <plate id="fancy">\n      <orange class="small"/>\n    </plate>\n    <plate>\n      <pickle/>\n    </plate>\n    <apple class="small"/>\n    <plate>\n      <apple/>\n    </plate>',
    },
    {
        doThis: 'Lấy các quả táo nằm cạnh cái đĩa',
        selector: 'plate + apple',
        helpTitle: 'Select an element that directly follows another element',
        selectorName: 'Adjacent Sibling Selector',
        syntax: 'A + B',
        help: 'Lấy ra thẻ này đứng liền kề sau thẻ kia.',
        examples: [
            '<strong>p + .intro</strong> Lấy ra thẻ có <strong>class="intro"</strong> đứng liền kề sau thẻ <tag>p</tag>',
            '<strong>div + a</strong> Lấy ra tất cả thẻ <tag>a</tag> đứng liền kề sau thẻ <tag>div</tag>',
        ],
        boardMarkup:
            '\n    <bento>\n      <apple class="small"/>\n    </bento>\n    <plate />\n    <apple class="small"/>\n    <plate />\n    <apple/>\n    <apple class="small"/>\n    <apple class="small"/>\n    ',
    },
    {
        selectorName: 'General Sibling Selector',
        helpTitle: 'Lấy ra các thẻ cùng loại đứng sau một thẻ khác',
        syntax: 'A ~ B',
        doThis: 'Lấy ra hết các quả dưa phía sau hộp cơm bento',
        selector: 'bento ~ pickle',
        help: 'Cái này sẽ lấy ra toàn bộ các thẻ có cùng loại thay vì chỉ lấy ra 1 thẻ.',
        examples: ['<strong>A ~ B</strong> Lấy ra toàn bộ thẻ <strong>B</strong> đứng sau thẻ <strong>A</strong>'],
        boardMarkup:
            '\n    <pickle/>\n    <bento>\n      <orange class="small"/>\n    </bento>\n    <pickle class="small"/>\n    <pickle/>\n    <plate>\n      <pickle/>\n    </plate>\n    <plate>\n      <pickle class="small"/>\n    </plate>\n    ',
    },
    {
        selectorName: 'Child Selector',
        syntax: 'A > B&nbsp;',
        doThis: 'Lấy ra quả táo chỉ đang nằm trên cái đĩa',
        selector: 'plate > apple',
        helpTitle: 'Lấy ra các thẻ con trực tiếp của một thẻ cha',
        help: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.',
        examples: ['<strong>A > B</strong> Chọn tất cả thẻ <strong>B</strong> nằm bên trong thẻ <strong>A</strong>'],
        boardMarkup:
            '\n    <plate>\n      <bento>\n        <apple/>\n      </bento>\n    </plate>\n    <plate>\n      <apple/>\n    </plate>\n    <plate/>\n    <apple/>\n    <apple class="small"/>\n    ',
    },
    {
        selectorName: 'First Child Pseudo-selector',
        helpTitle: 'Lấy ra rất cả các thẻ con đầu tiên nằm trong các thẻ cha',
        doThis: 'Lấy ra quả cam nằm trên đỉnh',
        selector: 'plate :first-child',
        syntax: ':first-child',
        help: 'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
        examples: [
            '<strong>:first-child</strong> Lấy ra tất cả các thẻ con đầu tiên.',
            '<strong>p:first-child</strong> Lấy ra tất cả các thẻ <tag>p</tag> là thẻ con đầu tiên.',
            '<strong>div p:first-child</strong>Lấy ra tất cả các thẻ <tag>p</tag> là thẻ con đầu tiên của thẻ <tag>div</tag>.',
        ],
        boardMarkup:
            '\n    <bento/>\n    <plate />\n    <plate>\n      <orange />\n      <orange />\n      <orange />\n    </plate>\n    <pickle class="small" />\n    ',
    },
    {
        selectorName: 'Only Child Pseudo-selector',
        helpTitle: 'Chọn phần tử là thẻ con duy nhất nằm bên trong một thẻ .',
        doThis: ' Lấy quả táo và dưa ra khỏi đĩa',
        selector: 'plate :only-child',
        syntax: ':only-child',
        help: 'You can select any element that is the only element inside of another one.',
        examples: [
            '<strong>span:only-child</strong> Lấy ra các thẻ <tag>span</tag> là phần tử con duy nhất của các thẻ khác .',
            '<strong>ul li:only-child</strong> Lấy ra thẻ <tag>li</tag> là thẻ con duy nhất nằm trong thẻ <tag>ul</tag>.',
        ],
        boardMarkup:
            '\n    <plate>\n      <apple/>\n    </plate>\n    <plate>\n      <pickle />\n    </plate>\n    <bento>\n      <pickle />\n    </bento>\n    <plate>\n      <orange class="small"/>\n      <orange/>\n    </plate>\n    <pickle class="small"/>\n    ',
    },
    {
        selectorName: 'Last Child Pseudo-selector',
        helpTitle: 'Lấy ra thẻ con cuối cùng nằm bên trong một thẻ',
        doThis: ' Lấy ra quả táo nhỏ và quả dưa',
        selector: '.small:last-child',
        syntax: ':last-child',
        help: '<br><br>Mẹo &rarr; Trong trường hợp chỉ có duy nhất một thẻ con, thẻ con đó được tính là thẻ con đầu tiên, thẻ con duy nhất và thẻ con cuối cùng!',
        examples: [
            '<strong>:last-child</strong> Lấy ra toàn bộ các thẻ con cuối cùng.',
            '<strong>span:last-child</strong> Lấy ra toàn bộ các thẻ <tag>span</tag> là thẻ con cuối cùng.',
            '<strong>ul li:last-child</strong> Lấy ra toàn bộ các thẻ <tag>li</tag> là thẻ con cuối cùng nằm trong thẻ <tag>ul</tag>.',
        ],
        boardMarkup:
            '\n    <plate id="fancy">\n      <apple class="small"/>\n    </plate>\n    <plate/>\n    <plate>\n      <orange class="small"/>\n      <orange>\n    </plate>\n    <pickle class="small"/>',
    },
    {
        selectorName: 'Nth Child Pseudo-selector',
        helpTitle: 'Lấy ra thẻ con nằm trong một thẻ cha theo một vị trí cụ thể',
        doThis: 'Lấy ra cái đĩa thứ 3',
        selector: ':nth-child(3)',
        syntax: ':nth-child(A)',
        help: 'Lấy ra các thẻ con thứ <strong>A</strong> nằm trong thẻ cha khác.',
        examples: [
            '<strong>:nth-child(8)</strong> Lấy ra mọi phần tử là thẻ con thứ 8 trong thẻ cha.',
            '<strong>div p:nth-child(2)</strong>Lấy ra thẻ <strong>p</strong> thứ 2 nằm trong mỗi thẻ<tag>div</tag>',
        ],
        boardMarkup: '\n    <plate/>\n    <plate/>\n    <plate/>\n    <plate id="fancy"/>\n    ',
    },
    {
        selectorName: 'Nth Last Child Selector',
        helpTitle: 'Lấy ra thẻ con nằm trong một thẻ cha theo một vị trí cụ thể tính từ cuối lên',
        doThis: 'Lấy ra hộp cơm bento đầu tiên',
        selector: 'bento:nth-last-child(3)',
        syntax: ':nth-last-child(A)',
        help: 'Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!',
        examples: ['<strong>:nth-last-child(2)</strong> Lấy ra các thẻ con thứ 2 tính từ cuối lên.'],
        boardMarkup:
            '\n    <plate/>\n    <bento/>\n    <plate>\n      <orange/>\n      <orange/>\n      <orange/>\n    </plate>\n    <bento/>\n    ',
    },
    {
        selectorName: 'First of Type Selector',
        helpTitle: 'Lấy ra thẻ đầu tiên của một loại thẻ cụ thể',
        doThis: 'Lấy ra quả táo đầu tiên',
        selector: 'apple:first-of-type',
        syntax: ':first-of-type',
        help: 'Selects the first element of that type within another element.',
        examples: ['<strong>span:first-of-type</strong> Lấy ra thẻ <tag>span</tag> xuất hiện đầu tiên.'],
        boardMarkup:
            '\n    <orange class="small"/>\n    <apple/>\n    <apple class="small"/>\n    <apple/>\n    <apple class="small"/>\n    <plate>\n      <orange class="small"/>\n      <orange/>\n    </plate>\n    ',
    },
    {
        selectorName: 'Nth of Type Selector',
        doThis: 'Lấy ra tất cả các đĩa ở vị trí chẵn',
        selector: 'plate:nth-of-type(even)',
        syntax: ':nth-of-type(A)',
        help: 'Lấy ra thẻ theo loại thẻ ở một vị trí cụ thể hoặc ở vị trí chẵn hay vị trí lẻ.',
        examples: [
            '<strong>div:nth-of-type(2)</strong> Lấy ra thẻ div xuất hiện lần thứ 2.',
            '<strong>.example:nth-of-type(odd)</strong> Lấy ra các thẻ có class là example xuất hiện ở vị trí lẻ.',
        ],
        boardMarkup:
            '\n    <plate/>\n    <plate/>\n    <plate/>\n    <plate/>\n    <plate id="fancy"/>\n    <plate/>\n    ',
    },
    {
        selectorName: 'Nth-of-type Selector with Formula',
        doThis: 'Lấy các đĩa vị trí thứ 3 và thứ 5 từ trái qua',
        selector: 'plate:nth-of-type(2n+3)',
        syntax: ':nth-of-type(An+B)',
        help: 'Lấy ra loại thẻ theo bước nhảy được tính theo công thức: A*n + B <br/>A là số bước nhảy, n là số đếm, luôn luôn bắt đầu từ 0 và tăng lên 1 đơn vị sau mỗi lần tính, B là giá trị bù.',
        examples: [
            '<strong>span:nth-of-type(6n+2)</strong> Lấy ra các thẻ <tag>span</tag> ở các vị trí: 2, 8, 14. <br/>Cách tính: 6 * 0 + 2, 6 * 1 + 2, cứ như thế tăng lên.',
        ],
        boardMarkup:
            '\n    <plate/>\n    <plate>\n      <pickle class="small" />\n    </plate>\n    <plate>\n      <apple class="small" />\n    </plate>\n    <plate/>\n    <plate>\n      <apple />\n    </plate>\n    <plate/>\n    ',
    },
    {
        selectorName: 'Only of Type Selector',
        helpTitle: 'Lấy ra các thẻ duy nhất của loại thẻ đó trong thẻ cha',
        selector: 'apple:only-of-type',
        syntax: ':only-of-type',
        doThis: 'Lấy quả táo ở đĩa nằm giữa',
        help: 'Selects the only element of its type within another element.',
        examples: [
            '<strong>p span:only-of-type</strong> Lấy ra thẻ <tag>span</tag> trong thẻ <tag>p</tag> nếu đó là thẻ <tag>span</tag> duy nhất.',
        ],
        boardMarkup:
            '\n    <plate id="fancy">\n      <apple class="small" />\n      <apple />\n    </plate>\n    <plate>\n      <apple class="small" />\n    </plate>\n    <plate>\n      <pickle />\n    </plate>\n    ',
    },
    {
        selectorName: 'Last of Type Selector',
        helpTitle: 'Lấy ra thẻ cuối cùng của một loại thẻ cụ thể',
        doThis: 'Lấy ra quả táo và quả cam cuối cùng',
        selector: '.small:last-of-type',
        syntax: ':last-of-type',
        help: 'Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.',
        examples: [
            '<strong>div:last-of-type</strong> Lấy ra thẻ <tag>div</tag> cuối cùng trong mọi thẻ cha.',
            '<strong>p span:last-of-type</strong> Lấy ra thẻ <tag>span</tag> cuối cùng trong mọi thẻ <tag>p</tag>.',
        ],
        boardMarkup:
            '\n    <orange class="small"/>\n    <orange class="small" />\n    <pickle />\n    <pickle />\n    <apple class="small" />\n    <apple class="small" />\n    ',
    },
    {
        selectorName: 'Empty Selector',
        helpTitle: 'Lấy ra các thẻ không có thẻ con bên trong',
        doThis: 'Lấy ra hộp cơm bento rỗng',
        selector: 'bento:empty',
        syntax: ':empty',
        help: "Selects elements that don't have any other elements inside of them.",
        examples: ['<strong>div:empty</strong> Lấy ra các thẻ <tag>div</tag> không có thẻ con bên trong nó.'],
        boardMarkup:
            '\n    <bento/>\n    <bento>\n      <pickle class="small"/>\n    </bento>\n    <plate/>\n    <bento/>',
    },
    {
        selectorName: 'Negation Pseudo-class',
        helpTitle: 'Lấy ra các phần tử khác với phần tử trong lớp giả phủ định',
        doThis: 'Lấy ra các quả táo lớn',
        selector: 'apple:not(.small)',
        syntax: ':not(X)',
        help: 'You can use this to select all elements that do not match selector <strong>"X"</strong>.',
        examples: [
            '<strong>:not(#fancy)</strong> Lấy ra các thẻ không có <strong>id="fancy"</strong>.',
            '<strong>div:not(:first-child)</strong> Lấy ra mỗi thẻ <tag>div</tag> không phải là thẻ con đầu tiên.',
            '<strong>:not(.big, .medium)</strong> Lấy ra các thẻ không có "medium" <strong>class="big"</strong> và <strong>class="medium"</strong>.',
        ],
        boardMarkup:
            '\n    <plate id="fancy">\n      <apple class="small" />\n    </plate>\n    <plate>\n      <apple />\n    </plate>\n    <apple />\n    <plate>\n      <orange class="small" />\n    </plate>\n    <pickle class="small" />\n    ',
    },
    {
        selectorName: 'Attribute Selector',
        helpTitle: 'Lấy ra các thẻ có một thuộc tính cụ thể',
        doThis: 'Lấy ra những vật phẩm đã có chủ',
        selector: '[for]',
        syntax: '[attribute]',
        help: 'Thuộc tính (attribute)  có dạng  key="value" và luôn được nằm bên trong thẻ mở. Thuộc tính có thể được bỏ trống, không bắt buộc phải luôn có giá trị.',
        examples: [
            '<strong>a[href]</strong> Lấy tất cả các thẻ <tag>a</tag> có thuộc tính <strong>href="anything"</strong>.',
            '<strong>[type]</strong> Lấy tất cả các thẻ có thuộc tính <strong>type="anything"</strong>.',
        ],
        boardMarkup:
            '\n    <bento><apple class="small"/></bento>\n    <apple for="Ethan"/>\n    <plate for="Alice"><pickle/></plate>\n    <bento for="Clara"><orange/></bento>\n    <pickle/>',
    },
    {
        selectorName: 'Attribute Selector',
        helpTitle: 'Lấy ra các thẻ có một thuộc tính cụ thể',
        doThis: 'Lấy ra các đĩa đã có chủ',
        selector: 'plate[for]',
        syntax: 'A[attribute]',
        help: 'Kết hợp selector thuộc tính với selector khác,ví dụ như tên thẻ bằng việc thêm thuộc tính vào cuối tên thẻ.',
        examples: [
            '<strong>[value]</strong> Lấy ra các thẻ có thuộc tính <strong>value="anything"</strong>.',
            '<strong>a[href]</strong> Lấy ra các thẻ <tag>a</tag>  có thuộc tính <strong>href="anything"</strong>.',
            '<strong>input[disabled]</strong> Lấy ra các thẻ <tag>input</tag> có thuộc tính <strong>disabled</strong>.',
        ],
        boardMarkup:
            '\n    <plate for="Sarah"><pickle/></plate>\n    <plate for="Luke"><apple/></plate>\n    <plate/>\n    <bento for="Steve"><orange/></bento>\n    ',
    },
    {
        selectorName: 'Attribute Value Selector',
        helpTitle: 'Lấy ra các thẻ có một thuộc tính cụ thể',
        doThis: 'Lấy ra bữa ăn của Vitaly',
        selector: '[for=Vitaly]',
        syntax: '[attribute="value"]',
        help: 'Selector thuộc tính có phân biệt hoa thường, nên phải đảm bảo chính xác tuyệt đối.',
        examples: ['<strong>input[type="checkbox"]</strong> Lấy ra các ô input có dạng checkbox.'],
        boardMarkup:
            '\n    <apple for="Alexei" />\n    <bento for="Albina"><apple /></bento>\n    <bento for="Vitaly"><orange/></bento>\n    <pickle/>\n    ',
    },
    {
        selectorName: 'Attribute Starts With Selector',
        helpTitle: 'Lấy ra các thẻ có giá trị thuộc tính bắt đầu bằng các kí tự cụ thể',
        doThis: "Lấy ra các vật phẩm có tên chủ bắt đầu bằng 'Sa'",
        selector: '[for^="Sa"]',
        syntax: '[attribute^="value"]',
        examples: [
            '<strong>.toy[category^="Swim"]</strong>Lấy ra các thẻ có class là toy và giá trị thuộc tính bắt đầu bằng <strong>category="Swimwear"</strong> hoặc <strong>category="Swimming"</strong>.',
        ],
        boardMarkup:
            '\n    <plate for="Sam"><pickle/></plate>\n    <bento for="Sarah"><apple class="small"/></bento>\n    <bento for="Mary"><orange/></bento>\n    ',
    },
    {
        selectorName: 'Attribute Ends With Selector',
        helpTitle: 'Lấy ra các thẻ có giá trị thuộc tính kết thúc bằng các kí tự cụ thể',
        doThis: "Lấy ra các vật phẩm có tên chủ kết thúc bằng 'ato'",
        selector: '[for$="ato"]',
        syntax: '[attribute$="value"]',
        help: '',
        examples: ['<strong>img[src$=".jpg"]</strong> Lấy ra các hình ảnh hiển thị dạng <strong>.jpg</strong>.'],
        boardMarkup:
            '\n    <apple class="small"/>\n    <bento for="Hayato"><pickle/></bento>\n    <apple for="Ryota"></apple>\n    <plate for="Minato"><orange/></plate>\n    <pickle class="small"/>\n    ',
    },
    {
        selectorName: 'Attribute Wildcard Selector',
        helpTitle: 'Lấy ra các thẻ có giá trị thuộc tính chứa các kí tự cụ thể ',
        syntax: '[attribute*="value"]',
        doThis: " Lấy ra các vật phẩm có tên chủ có chứa từ 'obb'",
        selector: '[for*="obb"]',
        help: 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
        examples: [
            '<strong>img[src*="/thumbnails/"]</strong> Lấy ra các thể hiển thị hình ảnh từ folder "thumbnail".',
            '<strong>[class*="heading"]</strong>Lấy ra các thẻ, có class chứa chuỗi "heading"',
        ],
        boardMarkup:
            '\n    <bento for="Robbie"><apple /></bento>\n    <bento for="Timmy"><pickle /></bento>\n    <bento for="Bobby"><orange /></bento>\n    ',
    },
];

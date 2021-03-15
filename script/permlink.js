
module.exports = function(source, layout) {
    var link = '/' + source.replace(/\.md$/, '.html');
    link = link.toLowerCase().replace(/^\//, '').replace(/\//g, '-').replace(/ /g, '-').replace(/-+/g, '-');
    return link;
}

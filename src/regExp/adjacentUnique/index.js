/**
 * 字符串去除相邻的重复项
 * 'aabbccddeexxxxaa' => 'abcdexa'
 */
function adjacentUnique(str) {
    return str.replace(/(\w)(\1)+/g,'$1');
}
import mineTpl from "../views/mine.html";
const render = () => {
        $(".main").html(mineTpl);
    }
    //先渲染整体 在渲染局部

export default {
    render
}
//中间 分享有礼横条的数据
const welfares_list = () => {
        return $.ajax({
            type: "get",
            url: "/user/memberTab?token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539499165097",
            success: (result) => {
                return result;
            }
        });
    }
    //图片列表数据
const renderDate = () => {
    return $.ajax({
        type: "get",
        url: "/i/pageData?dshopStoreId=11491&actId=816&pageId=2330&token=83EB7F557CCF2635BB848552649E4DC9BF53CAC004E68C19B05722A1C4AA92F8177688A76B545E42B879004E4542F08F595A6DE9E36F8970AEEAE1FE4D2BDF92EEEB8AE7D81884C5F4FC70882CCD6ED5E241327666682DE04BD75E3AA1C60DDCDA0B1386915EAC1D525428531C293778A73BF32390D526B249F6E702FDC128D7&source=2&tempid=C82C1A2BD75000028C44114FC3801807&_=1539497626339",
        success: (result) => {
            return result;
        }
    })
}

export default {
    welfares_list,
    renderDate
}
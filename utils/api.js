/**
 * 封装前端接口
 */


import Net from "./net";

export default class {

    /**
     * 文章列表
     */
    static newslist(pageIndex, pagesize) {
        return Net.postJSON("/newslist/", {}, { pageIndex: pageIndex, pagesize: pagesize });
    }

    /**
     * 删除文章
     */
    static login() {
        return Net.getJSON("https://www.easy-mock.com/mock/5af2adfe086dd715d58ab87a/avatar-backend/api/v1/getModuleAuthBySystemName");
    }

    /**
     * 创建文章
     */
    static newsEdit(data) {
        return Net.postJSON("/newsedit/", {}, data);
    }

    /**
     * 修改文章
     */
    static reEdit(Id, data) {
        return Net.postJSON("/newsedit/" + Id, {}, data);
    }

    /**
     * 获取单个文章
     */
    static newsOne(Id) {
        return Net.getJSON("/newsone/" + Id);
    }

    /**
     * 登录页面
     */
    // static login(data) {
    //     return Net.postJSON("/login", {}, data);
    // }

    /**
     * 登出页面
     */
    static logout() {
        return Net.postJSON("/api/logout");
    }


    /**
     * 急眼1
     */
    static JiyanSlide() {
        return Net.getJSON("/gt/register-slide?t=" + (new Date()).getTime());
    }

    /**
     * 急眼2
     */
    static JiyanValidate(data) {
        return Net.postJSON("/gt/validate-slide", {}, data);
    }



}
export class User {
    user_name: string;
    user_unit: string;
    phone: string;
    area: string;
    auth: string;
    account: string;
    password: string;

    public checkInput(){
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(){
        let object = { 
            user_name: this.user_name,
            user_unit: this.user_unit,
            phone: this.phone,
            area: this.area,
            // 字串還是數字
            auth: 1,
            account: this.account,
            password: this.password
        };

        return object;
    }
}

export let CategorySearch = ['', '姓名', '地區', '帳號'];
export let CategoryKey = ['', 'user_name', 'area', 'account'];
export let Area = ['', '台中', '高雄'];
export let Auth = ['', '一般使用者', '管理員'];
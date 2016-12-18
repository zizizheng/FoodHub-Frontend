export class Donee {
     _id: string;
    donee_name: string;
    phone: string;
    contact_phone: string;
    email: string;
    address: string;
    contact: string;
    category: string;
    house: string;
    people: string;

    public checkInput(){
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(){
        let object = { 
            //_id: this._id,
            donee_name: this.donee_name,
            phone: this.phone,
            contact_phone: this.contact_phone,
            email: this.email,
            address: this.address,
            contact: this.contact,
            category: this.category,
            //house: this.house,
            //people: this.people
        };

        return object;
    }
}

export let CategorySearch = ['', '單位名稱', '單位分類'];
export let CategoryKey = ['', 'donee_name', 'category'];
export let Category = [ '','身心障礙','街友 / 獨居老人', '弱勢清寒 / 課輔班', 
                '弱勢家庭 - 兒童 / 青少年 / 原住民 / 新移民 / 隔代教養','其他 (特殊境遇)'];
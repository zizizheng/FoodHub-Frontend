export class Donee {
    donee_name: string;
    phone: string;
    contact_phone: string;
    email: string;
    address: string;
    contact: string;
    category: string;
    house_num: number;
    people_num: number;

    public checkInput(){
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(){
        let object = { 
            donee_name: this.donee_name,
            phone: this.phone,
            contact_phone: this.contact_phone,
            email: this.email,
            address: this.address,
            contact: this.contact,
            category: this.category,
            house_num: this.house_num,
            people_num: this.people_num
        };

        return object;
    }

    pushData(ob){
        this.donee_name = ob.donee_name;
        this.phone = ob.phone;
        this.contact_phone = ob.contact_phone;
        this.email = ob.email;
        this.address = ob.address;
        this.contact = ob.contact;
        this.category = ob.category;
        this.house_num = ob.house_num;
        this.people_num = ob.people_num;
    }
}

export let CategorySearch = ['', '單位名稱', '單位分類'];
export let CategoryKey = ['', 'donee_name', 'category'];
export let Category = [ '','身心障礙','街友 / 獨居老人', '弱勢清寒 / 課輔班', 
                '弱勢家庭 - 兒童 / 青少年 / 原住民 / 新移民 / 隔代教養','其他 (特殊境遇)'];
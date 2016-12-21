export class Donor {
    ic: string;
    donor_name: string;
    phone: string;
    address: string;
    area: string;
    category: string;
    contact: string;
    contact_phone: string;
    email: string;

    public checkInput(){
        // TODO : 確認各種字串輸入正確與否
    }

    public getObject(){
        let object = { 
            donor_name: this.donor_name,
            ic: this.ic,
            phone: this.phone,
            address: this.address,
            area: this.area,
            category: this.category,
            contact: this.contact,
            contact_phone: this.contact_phone,
            email: this.email,
        };

        return object;
    }
}

export let CategorySearch = ['', '姓名', '地區', '分類'];
export let CategoryKey = ['', 'donor_name', 'area', 'category'];
export let Category = ['', '個人', '團體'];
export let Area = [ '', '北部', '中部', '南部', '東部' ];
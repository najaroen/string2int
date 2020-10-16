

const convert = ({data=''}) => {
    if(!data) {
        return null
    } else {
        let value = 'sadas3rfdrg1';
        let newValue = value.split('');
        let data =[];
        const numSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        data = newValue.map((d) => {
            let result = numSet.find((v) => v == d);
            if(result) {
              return result;
            }
        });
        let filterData = data.filter((v) => v !== undefined);
        let main = filterData.length;
        let input = 0;
        for (let i = 0; i < filterData.length ; i++) {
            console.log(typeof filterData[i])
            input = input + Math.pow(10, (main-1)) * filterData[i];
            main--
        }
        return input;
    }
}

console.log(convert({data: 'dsada2dsd33'}));
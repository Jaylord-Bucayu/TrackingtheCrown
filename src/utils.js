export const sortData  = (country) =>{
        const sortedData = [...country];
        
        sortedData.sort((a,b) =>{
            if(a.totalDeaths > b.totalDeaths){
                    return -1;
            }
            else{
                return 1;
            }
            return sortedData;
        });
      
}
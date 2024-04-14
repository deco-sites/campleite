import { AppContext  } from 'deco-sites/campleite/apps/site.ts'


export interface Country {
    name: string;
    media:{
        flag: string;
    }; 

    id:number; 
}


export interface Props {
    limit?: number;
}
const loader = async ( props: Props, _req: Request, _ctx: AppContext):Promise<Country[] | null> => {

    const limit = props.limit?? 10;

    const countriesResponse = await fetch('https://api.sampleapis.com/countries/countries'); 

    if(!countriesResponse.ok) {
        _ctx.response.status = 404;
        return null;
    }

    const allCountries: Country[] = await countriesResponse.json();

    const countries = allCountries.slice(0, limit);

    return countries; 
    
}; 

export default loader; 
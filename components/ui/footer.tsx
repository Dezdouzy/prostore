import { APP_NAME } from "@/lib/constants";
const Fotter = () => {
    const currentYear = new Date().getFullYear();
    return ( 
        <footer className="border-t">
            <div className="p-5 flex-center">
                {currentYear} [{APP_NAME}] ALl Rights Reserved
                
            </div>

        </footer>
     );
}
 
export default Fotter;
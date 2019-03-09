package iLab;

public class DriverManagerFactory {
    public static DriverManager getDriverManager(DriverType type){
       DriverManager driverManager = null;
        switch(type){
            case CHROME:
                driverManager = new ChromeDriverManager();
                break;

                case IE:
                    driverManager = new IEDriverManager();
                break;

            //case IE: FIREFOX
               // break;
            default:
                driverManager = new FirefoxDriverManager();
                break;

        }
        return driverManager;
    }
}

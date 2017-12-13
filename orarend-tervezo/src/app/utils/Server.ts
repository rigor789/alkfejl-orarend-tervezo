export class Server {
  public static routes = {
    SEARCH: 'search',
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    LOGOUT: 'auth/logout',
  };

  private static protocol: String = 'http';
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'apo';

  public static getURLFor(route: String) {
    return `${Server.protocol}://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}

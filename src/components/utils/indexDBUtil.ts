export class indexedDB {
   DB:any=null;
   dbName:string='fanta-comic'
   constructor(dbName:string){
        this.dbName=dbName?dbName:'fanta-comic';
   }
   openDB(){
      let request=window.indexedDB.open(this.dbName)
      request.onsuccess=()=>{

      }
   }
}
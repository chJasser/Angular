 import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { detailProduit } from 'src/Model/detaiProduit';
import { ImageModel } from 'src/Model/ImageModel';
import { Produit } from 'src/Model/Produit';
import { Rayon } from 'src/Model/Rayon';
import { Stock } from 'src/Model/Stock';
import { ProduitSService } from 'src/ServicesProduct/product-s.service';
import { RayonService } from '../../rayon/rayon.service';
import { StockService } from '../../stock/stock.service';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private is:ImageService,private ps:ProduitSService,private ss:StockService,private HS:HttpClient,private sr:RayonService,private router:Router) { }
  Product: FormGroup;
  myProduit: Produit;





  rayon:string
  stockk:string
voir:boolean=false;
  @Output() addedProduct = new EventEmitter<Produit>();
  @Output() addProductStatus = new EventEmitter<boolean>();

  AvecImage:Produit
  Image:any;
  iddd:any;
  ImageAdd:ImageModel;
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
idStockProduit:number;
idRayonProduit:number;
  ListStock:Stock[];
  ListRayon:Rayon[];
  detailProduit:detailProduit;

  libelleStockChoisit:string="";
  rayonChoisit:string="";


  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  test(){
    if(this.rayonChoisit!="" && this.libelleStockChoisit!=""){
      this.voir=true;
    }
  }

  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.HS.post('http://localhost:8089/SpringMVC/image/upload', uploadImageData,this.httpOptions)
  .subscribe((res) => {this.iddd=res;
      console.log("image created",this.Image)});
      this.is.upload(uploadImageData).subscribe((res)=>{this.iddd=res;console.log("image created id n° ",this.iddd)})
  
   }

  getLibelle(libelle:string){
    this.libelleStockChoisit=libelle;
  }

  getRayon(libelleRayon:string){
    this.rayonChoisit=libelleRayon;
  }


  getId(id){
    console.log(this.idStockProduit);
    console.log(id);
    this.ss.getStockById(id).subscribe((res) =>{
       this.idStockProduit=Number(res.idStock);
       console.log(this.idStockProduit);
    });
   
  }


  getIdRayon(id){
    
    console.log(id);
    this.sr.getRayonById(id).subscribe((res) =>{
       this.idRayonProduit=Number(res.idRayon);
       console.log(this.idRayonProduit);
    });
  }



  getAllStocks(){
    this.ss.getAllStock().subscribe((res) => {
      this.ListStock = res;
      console.log(this.ListStock);
    });
  }

  getAllRayons(){
    this.sr.getAllRayons().subscribe((res) => {
      this.ListRayon = res;
      console.log(this.ListRayon);
    });
  }
 
  ngOnInit(): void {
    console.log(this.idStockProduit);
  this.getAllStocks();
this.getAllRayons();


     this.Product = new FormGroup({
      id: new FormControl(),
      prixUnitaire: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      libelle: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
      code: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(12),
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
      category: new FormControl('', [
      ]),

    }); 
  }
  getImage(Name:String) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.HS.get('http://localhost:8089/SpringMVC/image/get/' + Name)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }








  addProduct() {
    console.log(this.Image)
    //this.getImage(this.Image.name)
    //this.ImageAdd=new ImageModel("2.png","image/png",this.base64Data)
  //this.ImageAdd=(ImageModel)this.Image
this.detailProduit=new detailProduit(this.Product.get('category').value)
    this.myProduit = new Produit(
      this.Product.get('code').value,
      this.Product.get('libelle').value,
      this.Product.get('prixUnitaire').value,
      this.detailProduit,
      this.Image
    );
    console.log(this.myProduit);
    console.log(this.myProduit.idProduit);
    this.ps.addProduct(this.myProduit,this.idStockProduit,this.idRayonProduit).subscribe((res) => {
      console.log('Product created!', res);
      this.ps.assignProduitToImage(this.iddd,res.idProduit).subscribe(
        (res)=>{this.AvecImage=res;
        console.log(this.AvecImage);}
      )
      
    });

    this.router.navigate(['/back']);
  
    
  } 

  sa1(a:number){
    console.log("Rayon déclenchéé")
  console.log(a)
  }

  sa(a:number){
    console.log("select déclenchéé")
  console.log(a)
  }

  productAdded() {
    this.Product.setValue({
      code: '',
      libelle: '',
      prixUnitaire: '',
    });
    this.addedProduct.emit(this.myProduit);
    this.addProductStatus.emit(false);
  }
  discardAdd() {
    this.addProductStatus.emit(false);
  }








  
}

import { Component, OnInit } from '@angular/core';
import { Product } from './Models/Product';
import { MyProductService } from './my-product.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-product',
  templateUrl: './my-product.component.html',
  styleUrls: ['./my-product.component.css'],
})
export class MyProductComponent implements OnInit {
  productDialog: boolean | undefined;

  products: Product[] = [];

  product: Product = {
    id: '',
    createdDate: '',
    name: '',
    description: '',
    rating: 0,
    price: 0,
    stocks: 0,
    productType: 'BOOK',
    productImage: [],
  };

  priview: boolean = true;

  selectedProducts: Product[] = [];

  submitted: boolean | undefined;

  productTypes: String[] = [];

  statuses: any[] | undefined;

  public myFormGroup: FormGroup;

  displayGallery: boolean = false;

  imageArray: any = [];

  constructor(
    private myProductService: MyProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {
    this.myFormGroup = this.formBuilder.group(this.product);
  }

  ngOnInit(): void {
    this.getProductTypeLists();
    this.getAllProducts();
  }

  uploader(event: any, fileUpload: any) {
    console.log(event.files[0]);
    this.selectedProducts.forEach((p) => {
      this.myProductService
        .imageUpload(event.files[0], p.id)
        .subscribe((res: any) => {
          console.log('Image Uploaded sucessfully');
          console.log(res);
          this.getAllProducts();
        })
        .add(() => {
          fileUpload.clear();
        });
    });
  }

  deleteImage(imageUrl: string) {
    let extratcedId = this.getExtractedId(imageUrl);
    this.priview = false;
    console.log(extratcedId);
    this.myProductService
      .deleteImage(extratcedId)
      .subscribe((res) => {
        console.log('Deleted Image');
        this.getAllProducts();
      })
      .add(() => {
        this.priview = true;
      });
  }

  getExtractedId(imageUrl: string): number {
    let imageId = imageUrl.split('/');
    let extratcedId = Number(imageId[imageId.length - 1]);
    return extratcedId;
  }

  getAllProducts() {
    this.myProductService.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }

  deleteSelectedProducts() {
    console.log(this.selectedProducts);
    this.selectedProducts.forEach((p) => {
      this.myProductService
        .deleteProduct(Number(p.id))
        .subscribe((res: any) => {
          console.log('Product Deleted');
          this.getAllProducts();
        });
    });
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  getProductTypeLists() {
    this.myProductService.getProductType().subscribe((res) => {
      this.productTypes = res;
    });
  }

  saveProduct() {
    this.submitted = true;
    console.log(this.myFormGroup);
    let product = this.myFormGroup.value as Product;

    this.myProductService.saveProduct(product).subscribe((res) => {
      this.getAllProducts();
    });

    this.productDialog = false;
    this.product = {} as Product;
  }

  openNew() {
    this.product = {} as Product;
    this.submitted = false;
    this.productDialog = true;
  }

  public expandGallery(id: number) {
    let filteredProduct = this.products.filter((p) => Number(p.id) === id);

    if (filteredProduct.length > 0) {
      this.product = filteredProduct[0];
      this.imageArray = this.product.productImage;
    }

    this.priview = false;
    this.displayGallery = true;
  }

  closeGallery() {
    this.priview = true;
  }
}

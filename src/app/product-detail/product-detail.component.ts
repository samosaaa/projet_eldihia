import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../services/products/products.service";
import {ProductModel} from "../models/product";
import {ReviewService} from "../services/review/review.service";
import {ReviewModel} from "../models/review";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public product: ProductModel | undefined;
  public reviews: ReviewModel[] = [];
  public newReview: string = '';
  public reviewForm: FormGroup;


  constructor(private route: ActivatedRoute, private productsService: ProductsService, private reviewService: ReviewService,private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      username: ['', Validators.required],
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    });
}
  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    this.productsService.getProductById(productId).subscribe(product => {
      this.product = product;
      console.log("product detail", product);
      this.loadReviews();
    });
  }
  loadReviews(): void {
    this.reviewService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }
  addReview(): void {
    if (this.reviewForm.valid && this.product) {
      const newReview: ReviewModel = {
        id: 'generate-an-id', // Vous devrez générer un ID unique ici
        username: this.reviewForm.value.username,
        rating: this.reviewForm.value.rating,
        comment: this.reviewForm.value.comment,
        robeId : this.reviewForm.value.robeId
      };

      // Ajouter le nouvel avis à la liste des avis du produit
      this.product.reviews.push(newReview);

      // Réinitialiser le formulaire
      this.reviewForm.reset();
    }
  }


}

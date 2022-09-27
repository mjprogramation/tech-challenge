<?php

namespace App\Contracts;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

interface ProductRepositoryInterface {
    
    /**
     * List all Products
     *
     * @param Request $request
     * @return Collection
     */
    public function list (Request $request) : mixed;

    /**
     * Create a new product
     *
     * @param ProductRequest $request
     * @return Product
     */
    public function create(ProductRequest $request) : Product;


    /**
     * Update existing product
     *
     * @param ProductRequest $request
     * @param Product $product
     * @return Product
     */
    public function update(ProductRequest $request, Product $product) : Product;


    /**
     * Retrive a single product
     *
     * @param Product $product
     * @return Product
     */
    public function find(Product $product) : Product;


    /**
     * Delete single product
     *
     * @param Product $product
     * @return Product
     */
    public function delete(Product $product) : Product;

}
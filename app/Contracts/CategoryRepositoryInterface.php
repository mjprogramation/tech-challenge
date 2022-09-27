<?php

namespace App\Contracts;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;

interface CategoryRepositoryInterface {
    
    /**
     * List categories
     *
     * @return mixed
     */
    public function list ();

    /**
     * Create new category
     *
     * @return Category
     */
    public function create (CategoryRequest $request): Category;



}
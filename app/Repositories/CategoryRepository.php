<?php

namespace App\Repositories;

use App\Contracts\CategoryRepositoryInterface;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;

class CategoryRepository implements CategoryRepositoryInterface {

    /**
     * List categories
     *
     * @return void
     */
    public function list()
    {
        return new Category();
    }

    public function create(CategoryRequest $request): Category
    {
        $category = Category::create($request->validated());

        return $category;
    }
    

}
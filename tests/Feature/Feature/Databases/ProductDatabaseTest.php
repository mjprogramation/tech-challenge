<?php

namespace Tests\Feature\Feature\Databases;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductDatabaseTest extends TestCase
{

    //use RefreshDatabase;
    /**
     * @test
     */
    public function testCanCreateProduct()
    {
        $product = Product::factory()->create();

        $this->assertDatabaseHas('products', $product->toArray());
    }

    /**
     * 
     *
     * @test
     */
    public function testCreateProductWithCategories () 
    {
        $categories = Category::factory()->count(3)->create();
        $product = Product::factory()->hasAttached($categories)->create();

        $this->assertCount(3, $product->categories);
    }
}

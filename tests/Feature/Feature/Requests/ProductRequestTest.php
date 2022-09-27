<?php

namespace Tests\Feature\Feature\Requests;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductRequestTest extends TestCase
{
    use RefreshDatabase;
    /**
     * 
     * @test
     */
    public function testListAllProducts()
    {
        $products = Product::factory()->has(Category::factory())->count(10)->create();
        $response = $this->get(route('products.index'));

        $this->assertCount(count($products), $response->json()['data']);
    }

}

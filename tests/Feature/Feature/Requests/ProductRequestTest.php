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
     * Random product request data
     *
     * @var array
     */
    protected array $fakeProduct = [
        'name' => 'Test Product',
        'description' => 'Test Product for sale',
        'price' => '525.25',
        'image' => '/path/to/uploaded/image.png'
    ];


    protected array $productJsonStructure = [
        "data" =>[
            "name",
            "description",
            "image",
            "categories"
        ]
    ];


    /**
     * 
     * @test
     */
    public function testListAllProductsRequest ()
    {
        $products = Product::factory()->has(Category::factory())->count(10)->create();
        $response = $this->get(route('products.index'));

        $this->assertCount(count($products), $response->json()['data']);
    }

    /**
    * @test
    */
    public function testCreateProductRequest ()
    {
        $category = Category::factory()->create();
        
        $response = $this->post(route('products.store'), array_merge(
            $this->fakeProduct,
            [
                'category_id' => [$category->id]
            ]
        ));

        $this->assertDatabaseCount('products', 1);
        $this->assertDatabaseCount('categories', 1);
        $response->assertJsonStructure($this->productJsonStructure);

    }


    /**
     * @test
     */
    public function testUpdateAProductRequest () 
    {   
        $category = Category::factory()->create();
        $product = Product::factory()->hasAttached($category)->create();
        $response = $this->put(route('products.update', ['product' => $product]), array_merge(
            $this->fakeProduct,
            [
                'category_id' => [$category->id]
            ]
        ));

        $response->assertJsonStructure($this->productJsonStructure);
        $response->assertJsonPath("data.name", $this->fakeProduct['name']);

    }   

    /**
     * @test
     */
    public function testGetProductByIdResquest ()
    {
        $product = Product::factory()->create();
        $response = $this->get(route('products.show', ['product' => $product]));

        $response->assertJsonStructure($this->productJsonStructure);
        $response->assertJsonPath('data.id', $product->id);
    }

    /**
     * @test
     */
    public function testCanDeleteGivenProduct () 
    {
        $product = Product::factory()->create();
        $this->assertDatabaseCount('products', 1);

        $response = $this->delete(route('products.destroy', ['product' => $product]));
        $response->assertJsonStructure($this->productJsonStructure);

        $this->assertDatabaseCount('products',0);
    }



}

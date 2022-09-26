<?php

namespace Tests\Feature\Feature\Databases;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductDatabaseTest extends TestCase
{

    use RefreshDatabase;
    /**
     * @test
     */
    public function testCanCreateProduct()
    {
        $product = Product::factory()->create();

        $this->assertDatabaseHas('products', $product->toArray());
    }
}

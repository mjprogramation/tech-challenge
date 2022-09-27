<?php

namespace Tests\Feature\Feature\Requests;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryRequestTest extends TestCase
{

    use RefreshDatabase;

    /**
     * Fake category request form
     *
     * @var array
     */
    public array $fakeCategory = [
        'name' => 'Fake Category'
    ];

    /**
     * Representational json structure
     *
     * @var array
     */
    public array $categoryJsonStructure = [
        'data' => [
            'id',
            'name'            
        ]
    ];
    /**
     *
     *
     * @test
     */
    public function testCanListAllCategories()
    {
        $categories = Category::factory()->count(10)->create();
        $response = $this->get(route('categories.index'));

        $response->assertJsonCount(count($categories), 'data');
    }

    /**
     * @test
     */
    public function testCanCreateCategory () 
    {
        $response = $this->post(route('categories.store'), $this->fakeCategory);

        $response->assertCreated();
        $response->assertJsonStructure($this->categoryJsonStructure);
    }
}

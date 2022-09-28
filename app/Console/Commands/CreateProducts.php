<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Console\Command;

class CreateProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'product:create {--name=} {--description=} {--price=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new product using cli';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $categories = Category::all();

        if(!$categories->count()) {
            $this->error("There is no categories yet!");
            $createFakeCategory = $this->choice(
                "Do you want to generate a test category?",
                [true, false], true
            );

            if($createFakeCategory) {
                Category::factory()->create();
                $categories = Category::all();
            }
        }

        $options = (object) $this->options();

        if(!$options->name) {
            $options->name = $this->ask('Whats your product name?', 'test name');
        }

        if(!$options->description) {
            $options->description = $this->ask('Describe your product', 'test description');
        }

        if(!$options->price) {
            $options->price = $this->ask("enter a price", 0);   
        }

        $category = $this->choice(
            "choose a corresponding category",
            $categories->pluck('id')->toArray()
        );

        $product = Product::create([
            'name' => $options->name,
            'description' => $options->description,
            'price' => floatval($options->price),
            'image' => null
        ]);

        $product->categories()->attach($category);


        
        return 0;


    }
}

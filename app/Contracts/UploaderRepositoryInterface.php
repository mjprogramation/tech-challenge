<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UploaderRepositoryInterface {

    /**
     * Store file to given path
     *
     * @return void
     */
    public function store (Request $request,string $path);

    /**
     * Validate Images 
     *
     * @param Request $request
     * @return void
     */
    public static function validateImage (Request $request);



}
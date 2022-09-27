<?php

namespace App\Http\Controllers;

use App\Contracts\UploaderRepositoryInterface;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    /**
     * Uploader Repository Interface property
     *
     * @var UploaderRepositoryInterface
     */
    private UploaderRepositoryInterface $uploaderRepository;


    /**
     * Construct controller with UploaderRepository injected
     *
     * @param UploaderRepositoryInterface $uploaderRepositoryInterface
     */
    public function __construct(UploaderRepositoryInterface $uploaderRepositoryInterface)
    {
        $this->uploaderRepository = new $uploaderRepositoryInterface;
    }

    /**
     * upload product Image api method
     *
     * @param Request $request
     * @return void
     */
    public function productImage (Request $request)
    {
        $this->uploaderRepository::validateImage($request);

        return $this->uploaderRepository->store($request, 'products');
    }
}

<?php
/**
 *  app/Repositories/CategoryRepositoryInterface.php
 *
 * Date-Time: 29.07.21
 * Time: 17:44
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Repositories;


use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

/**
 * Interface CategoryRepositoryInterface
 * @package App\Repositories
 */
interface CertificateRepositoryInterface
{

    /**
     * @param \App\Http\Requests\Admin\CategoryRequest $request
     * @param array $with
     */
    public function getData(Request $request, array $with = []);
}

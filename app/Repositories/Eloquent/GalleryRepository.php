<?php
/**
 *  app/Repositories/Eloquent/ProductRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;


use App\Models\Gallery;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\GalleryRepositoryInterface;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class GalleryRepository extends BaseRepository implements GalleryRepositoryInterface
{
    /**
     * @param \App\Models\Gallery $model
     */
    public function __construct(Gallery $model)
    {
        parent::__construct($model);
    }

}

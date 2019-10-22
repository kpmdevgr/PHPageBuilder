<?php
if (phpb_config('login.use_login')):
?>
<a href="?route=logout" class="btn btn-light btn-sm mt-1 float-right">
    <i class="fas fa-sign-out-alt"></i> <?= phpb_trans('website-manager.logout') ?>
</a>
<?php
endif;
?>

<div class="py-5 text-center">
    <h2><?= phpb_trans('website-manager.title') ?></h2>
</div>

<div class="row">
    <div class="col-12">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#pages"><?= phpb_trans('website-manager.pages') ?></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#menus"><?= phpb_trans('website-manager.menus') ?></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#settings"><?= phpb_trans('website-manager.settings') ?></a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="pages" class="tab-pane active">

                <h4 class="mb-3"><?= phpb_trans('website-manager.pages') ?></h4>

                <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col"><?= phpb_trans('website-manager.name') ?></th>
                            <th scope="col"><?= phpb_trans('website-manager.route') ?></th>
                            <th scope="col"><?= phpb_trans('website-manager.actions') ?></th>
                        </tr>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($pages as $page):
                            ?>
                            <tr>
                                <td>
                                    <?= e($page->name) ?>
                                </td>
                                <td>
                                    <?= e($page->route) ?>
                                </td>
                                <td class="actions">
                                    <a href="<?= e($page->route) ?>" target="_blank" class="btn btn-light btn-sm">
                                        <span><?= phpb_trans('website-manager.view') ?></span> <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="?route=pagebuilder&action=edit&page=<?= e($page->id) ?>" class="btn btn-primary btn-sm">
                                        <span><?= phpb_trans('website-manager.edit') ?></span> <i class="fas fa-edit"></i>
                                    </a>
                                    <a href="?route=page_settings&action=edit&page=<?= e($page->id) ?>" class="btn btn-secondary btn-sm">
                                        <span><?= phpb_trans('website-manager.settings') ?></span> <i class="fas fa-cog"></i>
                                    </a>
                                    <a href="?route=page_settings&action=destroy&page=<?= e($page->id) ?>" class="btn btn-danger btn-sm">
                                        <span><?= phpb_trans('website-manager.remove') ?></span> <i class="fas fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                            <?php
                            endforeach;
                            ?>
                        </tbody>
                    </table>
                </div>

                <hr class="mt-4 mb-3">
                <a href="?route=page_settings&action=create" class="btn btn-primary btn-sm">
                    <?= phpb_trans('website-manager.add-new-page') ?>
                </a>

            </div>
            <div id="menus" class="tab-pane">

                <h4 class="mb-3"><?= phpb_trans('website-manager.menus') ?></h4>

            </div>
            <div id="settings" class="tab-pane">

                <h4 class="mb-3"><?= phpb_trans('website-manager.settings') ?></h4>

            </div>
        </div>
    </div>
</div>

<?php
/**
 * 后台管理系统
 *
 * ==========================================================================
 * @link      
 * @copyright Copyright (c) 2018-2025 DBShop.net Inc. 
 * @license    License
 * ==========================================================================
 *
 * @author    赵天鑫 2017-12-26
 *
 */
return array(
    'routes' => array(
        'home' => array(
            'type' => 'Segment',
            'options' => array(
                'route' => '/admin[/:action]',
                'constraints' => array(
                    'controller' => '[a-zA-Z][a-zA-Z0-9_-]+',
                    'action'     => '[a-zA-Z][a-zA-Z0-9_-]+',
                ),
                'defaults' => array(
                    '__NAMESPACE__' => 'Admin\Controller',
                    'controller' => 'Admin',
                    'action' => 'index'
                )
            )
        ),
        'News' => array(
            'type' => 'Segment',
            'options' => array(
                'route' => '[/:controller][/:action]',
                'constraints' => array(
                    'controller' => '[a-zA-Z][a-zA-Z0-9_-]+',
                    'action'     => '[a-zA-Z][a-zA-Z0-9_-]+',
                ),
                'defaults' => array(
                    '__NAMESPACE__' => 'Admin\Controller',
                    'controller' => 'News',
                    'action' => 'index'
                )
            )
        ),        
    )
);
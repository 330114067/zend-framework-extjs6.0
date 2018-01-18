<?php
namespace Admin\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;

class navigation implements InputFilterAwareInterface
{
    public $id;
    public $name;
    public $keyid;
    public $xtypeClass;
    public $menu;
    public $leaf;
    public $sort;
    public $display;
    public $store;
    public $iconCls;
	protected $inputFilter;

    public function exchangeArray($data)
    {
        $this->id     = (!empty($data['id'])) ? $data['id'] : null;
        $this->name = (!empty($data['name'])) ? $data['name'] : null;
        $this->keyid  = (!empty($data['keyid'])) ? $data['keyid'] : null;
        $this->xtypeClass = (!empty($data['xtypeClass'])) ? $data['xtypeClass'] : null;
        $this->menu  = (!empty($data['menu'])) ? $data['menu'] : null;
        $this->leaf = (!empty($data['leaf'])) ? $data['leaf'] : null;
        $this->sort  = (!empty($data['sort'])) ? $data['sort'] : null;
        $this->display = (!empty($data['display'])) ? $data['display'] : null;
        $this->store  = (!empty($data['store'])) ? $data['store'] : null;
        $this->iconCls = (!empty($data['iconCls'])) ? $data['iconCls'] : null;
    }
	
    // 添加以下方法
    public function getArrayCopy()
    {
        return get_object_vars($this);
    }
	
    // 向这些方法添加内容:
    public function setInputFilter(InputFilterInterface $inputFilter)
    {
        throw new \Exception("Not used");
    }

    public function getInputFilter()
    {		
        if (!$this->inputFilter) {
            $inputFilter = new InputFilter();
            $factory     = new InputFactory();

            $inputFilter->add($factory->createInput(array(
            		'name'     => 'id',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            

            $inputFilter->add($factory->createInput(array(
                'name'     => 'name',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name'    => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min'      => 1,
                            'max'      => 225,
                        ),
                    ),
                ),
            )));
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'keyid',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
           
            $inputFilter->add($factory->createInput(array(
                'name'     => 'xtypeClass',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name'    => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min'      => 1,
                            'max'      => 70,
                        ),
                    ),
                ),
            )));
            
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'menu',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            
            $inputFilter->add($factory->createInput(array(
                'name'     => 'leaf',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name'    => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min'      => 1,
                            'max'      => 30,
                        ),
                    ),
                ),
            )));
            
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'sort',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'display',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            
            $inputFilter->add($factory->createInput(array(
                'name'     => 'store',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name'    => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min'      => 1,
                            'max'      => 40,
                        ),
                    ),
                ),
            )));
            
            $inputFilter->add($factory->createInput(array(
                'name'     => 'iconCls',
                'required' => true,
                'filters'  => array(
                    array('name' => 'StripTags'),
                    array('name' => 'StringTrim'),
                ),
                'validators' => array(
                    array(
                        'name'    => 'StringLength',
                        'options' => array(
                            'encoding' => 'UTF-8',
                            'min'      => 1,
                            'max'      => 30,
                        ),
                    ),
                ),
            )));

            $this->inputFilter = $inputFilter;
        }

        return $this->inputFilter;
    }
}
<?php
namespace Admin\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;

class fid implements InputFilterAwareInterface
{
    public $fid;
    public $name;
	protected $inputFilter;

    public function exchangeArray($data)
    {
        $this->fid     = (!empty($data['fid'])) ? $data['fid'] : null;
        $this->name = (!empty($data['name'])) ? $data['name'] : null;
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
                'name'     => 'fid',
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
            

            $this->inputFilter = $inputFilter;
        }

        return $this->inputFilter;
    }
}
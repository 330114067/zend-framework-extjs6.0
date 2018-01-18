<?php
namespace Admin\Model;

use Zend\InputFilter\Factory as InputFactory;
use Zend\InputFilter\InputFilter;
use Zend\InputFilter\InputFilterAwareInterface;
use Zend\InputFilter\InputFilterInterface;

class user implements InputFilterAwareInterface
{
    public $id;
    public $enabled;
    public $login_name;
    public $name;
    public $org_id;
    public $group_id;
    public $password;
    public $py;
    public $gender;
    public $birthday;
    public $id_card_number;
    public $tel;
    public $tel02;
    public $address;
    public $data_org;
	protected $inputFilter;

    public function exchangeArray($data)
    {
        $this->id     = (!empty($data['id'])) ? (int)$data['id'] : null;
        $this->enabled = (!empty($data['enabled'])) ? (int)$data['enabled'] : null;
        $this->login_name  = (!empty($data['login_name'])) ? $data['login_name'] : null;
        $this->name = (!empty($data['name'])) ? $data['name'] : null;
        $this->org_id  = (!empty($data['org_id'])) ? (int)$data['org_id'] : null;
        $this->group_id = (!empty($data['group_id'])) ?(int) $data['group_id'] : null;
        $this->password  = (!empty($data['password'])) ? $data['password'] : null;
        $this->py = (!empty($data['py'])) ? $data['py'] : null;
        $this->gender  = (!empty($data['gender'])) ? $data['gender'] : null;
        $this->birthday = (!empty($data['birthday'])) ? $data['birthday'] : null;
        $this->id_card_number  = (!empty($data['id_card_number'])) ? $data['id_card_number'] : null;
        $this->tel = (!empty($data['tel'])) ? $data['tel'] : null;
        $this->tel02  = (!empty($data['tel02'])) ? $data['tel02'] : null;
        $this->address = (!empty($data['address'])) ? $data['address'] : null;
        $this->data_org  = (!empty($data['data_org'])) ? $data['data_org'] : null;
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
                'name'     => 'enabled',
                'required' => true,
                'filters'  => array(
                    array('name' => 'int'),
                ),
            )));

            $inputFilter->add($factory->createInput(array(
                'name'     => 'login_name',
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
            
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'org_id',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            
            $inputFilter->add($factory->createInput(array(
            		'name'     => 'group_id',
            		'required' => true,
            		'filters'  => array(
            				array('name' => 'Int'),
            		),
            )));
            
            $inputFilter->add($factory->createInput(array(
                'name'     => 'password',
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
                'name'     => 'py',
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
                'name'     => 'gender',
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
                'name'     => 'birthday',
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
                'name'     => 'id_card_number',
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
                'name'     => 'tel',
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
                'name'     => 'tel02',
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
                'name'     => 'address',
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
                'name'     => 'data_org',
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
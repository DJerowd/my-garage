import { React, useState, useEffect } from 'react';
import properties from '../../data/properties.json';
import './Styles.css';
import { toast } from 'react-toastify';

function Form({ garagesByCharacterId, setUpdateGarageListByCharacterId }) {
  const [garagem, setGaragem] = useState({
    agency: '',
    arena: '',
    autoShop: '',
    bailEnforcement: '',
    bunker: '',
    casinoPenthouse: '',
    executiveOfficeGarage1: '',
    executiveOfficeGarage2: '',
    executiveOfficeGarage3: '',
    garage1: '',
    garage2: '',
    garage3: '',
    garage4: '',
    garage5: '',
    garage6: '',
    garage7: '',
    garage8: '',
    garage9: '',
    garage10: '',
    vinewoodGarage: '',
    eclipseBlvdGarage: '',
    hangar: '',
    terrorbyte: '',
    moc: '',
    avenger: '',
    clubhouse: '',
    nightclub: '',
    retroArcade: '',
    salvageYard: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGaragem(prevState => ({
    ...prevState,
    [name]: value
    }));
  };

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    toast.warn(JSON.stringify(garagesByCharacterId))
    setUpdateGarageListByCharacterId(prevState => !prevState);
  };

//   useEffect(() => {
//     // toast.warn(JSON.stringify(garagesByCharacterId))
//   }, [garagesByCharacterId]);

  return (
    <div>
        <h3>Garagens:</h3>
        {/* <h3 style={{color: '#f00'}}>{JSON.stringify(garagem)}</h3>
        <h3 style={{color: '#f0f'}}>{JSON.stringify(garagem.agency)}</h3> */}

        <form onSubmit={handleSubmit}>
            <label>
                Agência:
                <select name="agency" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.agency.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Oficina de Arena:
                <select name="arena" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.arena.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>  
            </label>

            <label>
                Oficina de Tuning:
                <select name="autoShop" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.autoShop.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Escritório de Fiança:
                <select name="bailEnforcement" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.bailEnforcement.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
 
            <label>
                Bunker:
                <select name="bunker" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.bunker.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem da Penthouse:
                <select name="casinoPenthouse" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.casinoPenthouse.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 1 do Escritório Executivo:
                <select name="executiveOfficeGarage1" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage1.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 2 do Escritório Executivo:
                <select name="executiveOfficeGarage2" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage2.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 3 do Escritório Executivo:
                <select name="executiveOfficeGarage3" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.executiveOfficeGarage3.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Instalações do Complexo:
                <select name="facility" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.facility.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 1:
                <select name="garage1" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 2:
                <select name="garage2" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 3:
                <select name="garage3" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 4:
                <select name="garage4" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 5:
                <select name="garage5" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 6:
                <select name="garage6" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 7:
                <select name="garage7" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 8:
                <select name="garage8" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem 9:
                <select name="garage9" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Garagem 10:
                <select name="garage10" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.garage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Garagem do Clube Vinewood:
                <select name="vinewoodGarage" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.vinewoodGarage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Garagem de Alto padrão Eclipse Blvd:
                <select name="eclipseBlvdGarage" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.eclipseBlvdGarage.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>    
            </label>
        
            <label>
                Hangar:
                <select name="hangar" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.hangar.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Terrorbyte:
                <select name="terrorbyte" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.terrorbyte.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Centro de Operações Móveis:
                <select name="moc" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.moc.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Avenger:
                <select name="avenger" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.avenger.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Motoclube:
                <select name="clubhouse" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.clubhouse.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Boate:
                <select name="nightclub" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.nightclub.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Arcade:
                <select name="retroArcade" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.retroArcade.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>
        
            <label>
                Pátio do Ferro-velho:
                <select name="salvageYard" onChange={handleChange}>
                    <option value="">Nenhum</option>
                    {properties.salvageYard.map((property) => (
                        <option key={property.value} value={property.value}>
                            ({property.capacity} vagas) {property.property}
                        </option>
                    ))}
                </select>
            </label>

            <div style={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
                <button style={{paddingInline: 10}} type="submit">Salvar</button>
            </div>
        </form>
    </div>
  );
}

export default Form;
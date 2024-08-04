import React, { useState } from 'react';
import './Styles.css';

function List({ personagemId }) {
  const [garagem, setGaragem] = useState('');
  const [agency, setAgency] = useState('');
  const [arena, setArena] = useState('');
  const [autoShop, setAutoShop] = useState('');
  const [bailEnforcement, setBailEnforcement] = useState('');
  const [bunker, setBunker] = useState('');
  const [casinoPenthouse, setCasinoPenthouse] = useState('');
  const [executiveOfficeGarage1, setExecutiveOfficeGarage1] = useState('');
  const [executiveOfficeGarage2, setExecutiveOfficeGarage2] = useState('');
  const [executiveOfficeGarage3, setExecutiveOfficeGarage3] = useState('');
  const [facility, setFacility] = useState('');
  const [garage1, setGarage1] = useState('');
  const [garage2, setGarage2] = useState('');
  const [garage3, setGarage3] = useState('');
  const [garage4, setGarage4] = useState('');
  const [garage5, setGarage5] = useState('');
  const [garage6, setGarage6] = useState('');
  const [garage7, setGarage7] = useState('');
  const [garage8, setGarage8] = useState('');
  const [garage9, setGarage9] = useState('');
  const [garage10, setGarage10] = useState('');
  const [vinewoodGarage, setVinewoodGarage] = useState('');
  const [hangar, setHangar] = useState('');
  const [terrorbyte, setTerrorbyte] = useState('');
  const [moc, setMoc] = useState('');
  const [avenger, setAvenger] = useState('');
  const [clubhouse, setClubhouse] = useState('');
  const [nightclub, setNightclub] = useState('');
  const [retroArcade, setRetroArcade] = useState('');
  const [salvageYard, setSalvageYard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar a escolha da garagem no estado global ou enviar para um backend
    alert(`Garagem escolhida para o personagem ${personagemId}: ${garagem}`);
    // Limpa o formulário após a submissão
    setGaragem('');
  };

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <label>
                Agência:<br/>
                <select value={agency} onChange={(e) => setAgency(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="vespucci canals agency">Agência Vespucci Canais</option>
                    <option value="little seoul agency">Agência Little Seoul</option>
                    <option value="hawick agency">Agência Hawick</option>
                    <option value="rockford hills agency">Agência Rockford Hills</option>
                </select>
            </label>
            <button type="submit">Salvar</button><br/>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Oficina de Arena:<br/>
                <select value={arena} onChange={(e) => setArena(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="arena">Oficina de Arena Maze Bank</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Oficina de Tuning:<br/>
                <select value={autoShop} onChange={(e) => setAutoShop(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="burton auto shop">Burton Auto Shop</option>
                    <option value="la mesa auto shop">La Mesa Auto Shop</option>
                    <option value="mission row auto shop">Mission Row Auto Shop</option>
                    <option value="rancho auto shop">Rancho Auto Shop</option>
                    <option value="strawberry auto shop">Strawberry Auto Shop</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Escritório de Fiança:<br/>
                <select value={bailEnforcement} onChange={(e) => setBailEnforcement(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="Downtown Vinewood Bail Office">Oficina de Arena Maze Bank</option>
                    <option value="Mission Row Bail Office">Oficina de Arena Maze Bank</option>
                    <option value="Del Perro Bail Office">Oficina de Arena Maze Bank</option>
                    <option value="Davis Bail Office">Oficina de Arena Maze Bank</option>
                    <option value="Paleto Bay Bail Office">Oficina de Arena Maze Bank</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Bunker:<br/>
                <select value={bunker} onChange={(e) => setBunker(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem da Penthouse:<br/>
                <select value={casinoPenthouse} onChange={(e) => setCasinoPenthouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 1 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage1} onChange={(e) => setExecutiveOfficeGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 2 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage2} onChange={(e) => setExecutiveOfficeGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 3 do Escritório Executivo:<br/>
                <select value={executiveOfficeGarage3} onChange={(e) => setExecutiveOfficeGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Instalações do Complexo:<br/>
                <select value={facility} onChange={(e) => setFacility(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 1:<br/>
                <select value={garage1} onChange={(e) => setGarage1(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 2:<br/>
                <select value={garage2} onChange={(e) => setGarage2(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 3:<br/>
                <select value={garage3} onChange={(e) => setGarage3(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 4:<br/>
                <select value={garage4} onChange={(e) => setGarage4(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 5:<br/>
                <select value={garage5} onChange={(e) => setGarage5(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 6:<br/>
                <select value={garage6} onChange={(e) => setGarage6(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 7:<br/>
                <select value={garage7} onChange={(e) => setGarage7(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 8:<br/>
                <select value={garage8} onChange={(e) => setGarage8(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 9:<br/>
                <select value={garage9} onChange={(e) => setGarage9(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem 10:<br/>
                <select value={garage10} onChange={(e) => setGarage10(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Garagem do Clube Vinewood:<br/>
                <select value={vinewoodGarage} onChange={(e) => setVinewoodGarage(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Hangar:<br/>
                <select value={hangar} onChange={(e) => setHangar(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Terrorbyte:<br/>
                <select value={terrorbyte} onChange={(e) => setTerrorbyte(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Centro de Operações Móveis:<br/>
                <select value={moc} onChange={(e) => setMoc(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Avenger:<br/>
                <select value={avenger} onChange={(e) => setAvenger(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Motoclube:<br/>
                <select value={clubhouse} onChange={(e) => setClubhouse(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Boate:<br/>
                <select value={nightclub} onChange={(e) => setNightclub(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Arcade:<br/>
                <select value={retroArcade} onChange={(e) => setRetroArcade(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>

        <form className='form' onSubmit={handleSubmit}>
            <label>
                Pátio do Ferro-velho:<br/>
                <select value={salvageYard} onChange={(e) => setSalvageYard(e.target.value)} required>
                    <option value="">Nenhum</option>
                    <option value="1">1</option>
                </select>
            </label>
            <button type="submit">Salvar</button>
        </form>
    </div>
  );
}

export default List;
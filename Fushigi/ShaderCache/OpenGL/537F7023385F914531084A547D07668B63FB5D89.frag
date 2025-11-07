#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_24;
layout (binding = 2) uniform sampler2D fp_t_tcb_34;
layout (binding = 3) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 4) uniform samplerCube fp_t_tcb_18;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise vec2 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise vec4 temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise vec4 temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise vec3 temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise vec3 temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise vec3 temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise vec3 temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    precise float temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    precise float temp_420;
    precise float temp_421;
    precise float temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    // 0x000008: 0xE003FF87CFF7FF00 Ipa
    // 0x000010: 0x5080000000470000 Mufu
    // 0x000018: 0xE043FF8E0007FF01 Ipa
    temp_0 = in_attr6.x;
    // 0x000028: 0xE043FF8E4007FF04 Ipa
    temp_1 = in_attr6.y;
    // 0x000030: 0xE043FF8EC007FF16 Ipa
    temp_2 = in_attr6.w;
    // 0x000038: 0xE043FF8E8007FF17 Ipa
    temp_3 = in_attr6.z;
    // 0x000048: 0xD830026FF0470102 Texs
    temp_4 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    // 0x000050: 0xD832024140470106 Texs
    temp_7 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_8 = temp_7.x;
    temp_9 = temp_7.y;
    temp_10 = temp_7.z;
    temp_11 = temp_7.w;
    // 0x000058: 0xD832034161671718 Texs
    temp_12 = texture(fp_t_tcb_34, vec2(temp_3, temp_2)).xyzw;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    temp_15 = temp_12.z;
    temp_16 = temp_12.w;
    // 0x000068: 0xE043FF880007FF05 Ipa
    temp_17 = in_attr0.x;
    // 0x000070: 0xE043FF890007FF0F Ipa
    temp_18 = in_attr1.x;
    // 0x000078: 0xE043FF884007FF09 Ipa
    temp_19 = in_attr0.y;
    // 0x000088: 0xE043FF8A0007FF0E Ipa
    temp_20 = in_attr2.x;
    // 0x000090: 0xE043FF894007FF10 Ipa
    temp_21 = in_attr1.y;
    // 0x000098: 0xE043FF888007FF08 Ipa
    temp_22 = in_attr0.z;
    // 0x0000A8: 0xE043FF8A4007FF0D Ipa
    temp_23 = in_attr2.y;
    // 0x0000B0: 0xE043FF898007FF0A Ipa
    temp_24 = in_attr1.z;
    // 0x0000B8: 0xE043FF8A8007FF0C Ipa
    temp_25 = in_attr2.z;
    // 0x0000C8: 0xE043FF8C8007FF1E Ipa
    temp_26 = in_attr4.z;
    // 0x0000D0: 0xE003FF870FF7FF23 Ipa
    temp_27 = gl_FragCoord.x;
    temp_28 = support_buffer.render_scale[0];
    temp_29 = temp_27 / temp_28;
    // 0x0000D8: 0xE043FF8C0007FF04 Ipa
    temp_30 = in_attr4.x;
    // 0x0000E8: 0xE043FF8C4007FF01 Ipa
    temp_31 = in_attr4.y;
    // 0x0000F0: 0xE003FF874FF7FF22 Ipa
    temp_32 = gl_FragCoord.y;
    temp_33 = support_buffer.render_scale[0];
    temp_34 = temp_32 / temp_33;
    // 0x0000F8: 0x5C68100000570512 Fmul
    temp_35 = temp_17 * temp_17;
    // 0x000108: 0x5C68100000F70F11 Fmul
    temp_36 = temp_18 * temp_18;
    // 0x000110: 0x5C68100000E70E0B Fmul
    temp_37 = temp_20 * temp_20;
    // 0x000118: 0x59A0090000970912 Ffma
    temp_38 = fma(temp_19, temp_19, temp_35);
    // 0x000128: 0x59A0088001071011 Ffma
    temp_39 = fma(temp_21, temp_21, temp_36);
    // 0x000130: 0x59A0058000D70D0B Ffma
    temp_40 = fma(temp_23, temp_23, temp_37);
    // 0x000138: 0x4C68100C04A72323 Fmul
    temp_41 = temp_29 * fp_c3.data[18].z;
    // 0x000148: 0x5C6810000047041A Fmul
    temp_42 = temp_30 * temp_30;
    // 0x000150: 0x59A0090000870812 Ffma
    temp_43 = fma(temp_22, temp_22, temp_38);
    // 0x000158: 0x59A0088000A70A11 Ffma
    temp_44 = fma(temp_24, temp_24, temp_39);
    // 0x000168: 0x5080000000571212 Mufu
    temp_45 = inversesqrt(temp_43);
    // 0x000170: 0x59A0058000C70C0B Ffma
    temp_46 = fma(temp_25, temp_25, temp_40);
    // 0x000178: 0x5080000000571111 Mufu
    temp_47 = inversesqrt(temp_44);
    // 0x000188: 0x4C68100C04B72222 Fmul
    temp_48 = temp_34 * fp_c3.data[18].w;
    // 0x000190: 0x5080000000570B0B Mufu
    temp_49 = inversesqrt(temp_46);
    // 0x000198: 0x5C6810000127051B Fmul
    temp_50 = temp_17 * temp_45;
    // 0x0001A8: 0x5C68100001270909 Fmul
    temp_51 = temp_19 * temp_45;
    // 0x0001B0: 0x5C68100001170F13 Fmul
    temp_52 = temp_18 * temp_47;
    // 0x0001B8: 0x5C6810000117100F Fmul
    temp_53 = temp_21 * temp_47;
    // 0x0001C8: 0x59A00D0000170110 Ffma
    temp_54 = fma(temp_31, temp_31, temp_42);
    // 0x0001D0: 0x5C68100000B70E0E Fmul
    temp_55 = temp_20 * temp_49;
    // 0x0001D8: 0x5C68100000B70D0D Fmul
    temp_56 = temp_23 * temp_49;
    // 0x0001E8: 0x5C68100000B70C0C Fmul
    temp_57 = temp_25 * temp_49;
    // 0x0001F0: 0x5C68100001170A0B Fmul
    temp_58 = temp_24 * temp_47;
    // 0x0001F8: 0x5C68100001270808 Fmul
    temp_59 = temp_22 * temp_45;
    // 0x000208: 0x59A0080001E71E11 Ffma
    temp_60 = fma(temp_26, temp_26, temp_54);
    // 0x000210: 0x508000000057111F Mufu
    temp_61 = inversesqrt(temp_60);
    // 0x000218: 0x5C69100001F70404 Fmul
    temp_62 = 0.0 - temp_61;
    temp_63 = temp_30 * temp_62;
    // 0x000228: 0x5C69100001F7010A Fmul
    temp_64 = 0.0 - temp_61;
    temp_65 = temp_31 * temp_64;
    // 0x000230: 0x5C69100001F71E1E Fmul
    temp_66 = 0.0 - temp_61;
    temp_67 = temp_26 * temp_66;
    // 0x000238: 0x4C98079C0207001F Mov
    // 0x000248: 0xF0F0000034170000 Depbar
    // 0x000250: 0x5C68100000370305 Fmul
    temp_68 = temp_6 * temp_6;
    // 0x000258: 0x5C68100000370D0D Fmul
    temp_69 = temp_56 * temp_6;
    // 0x000268: 0x5C68100000370C0C Fmul
    temp_70 = temp_57 * temp_6;
    // 0x000270: 0x59A0028000270205 Ffma
    temp_71 = fma(temp_5, temp_5, temp_68);
    // 0x000278: 0x59A0068000F7020F Ffma
    temp_72 = fma(temp_5, temp_53, temp_69);
    // 0x000288: 0x59A0060000B7020B Ffma
    temp_73 = fma(temp_5, temp_58, temp_70);
    // 0x000290: 0x4C58301805D70A0C Fadd
    temp_74 = 0.0 - fp_c6.data[23].y;
    temp_75 = temp_65 + temp_74;
    // 0x000298: 0x385D103F80070510 Fadd
    temp_76 = 0.0 - temp_71;
    temp_77 = temp_76 + 1.0;
    temp_78 = clamp(temp_77, 0.0, 1.0);
    // 0x0002A8: 0x5C68100000370E05 Fmul
    temp_79 = temp_55 * temp_6;
    // 0x0002B0: 0x5080000000871012 Mufu
    temp_80 = sqrt(temp_78);
    // 0x0002B8: 0x4C58301805C70403 Fadd
    temp_81 = 0.0 - fp_c6.data[23].x;
    temp_82 = temp_63 + temp_81;
    // 0x0002C8: 0x59A0028001370205 Ffma
    temp_83 = fma(temp_5, temp_52, temp_79);
    // 0x0002D0: 0x5C68100000370301 Fmul
    temp_84 = temp_82 * temp_82;
    // 0x0002D8: 0x010000000017F010 Mov32i
    // 0x0002E8: 0x59A0028001B71205 Ffma
    temp_85 = fma(temp_80, temp_50, temp_83);
    // 0x0002F0: 0x59A0078000971209 Ffma
    temp_86 = fma(temp_80, temp_51, temp_72);
    // 0x0002F8: 0x59A0058000871208 Ffma
    temp_87 = fma(temp_80, temp_59, temp_73);
    // 0x000308: 0x4C58301805E71E0B Fadd
    temp_88 = 0.0 - fp_c6.data[23].z;
    temp_89 = temp_67 + temp_88;
    // 0x000310: 0x59A0008000C70C0D Ffma
    temp_90 = fma(temp_75, temp_75, temp_84);
    // 0x000318: 0x5C68100000570502 Fmul
    temp_91 = temp_85 * temp_85;
    // 0x000328: 0x59A0068000B70B0D Ffma
    temp_92 = fma(temp_89, temp_89, temp_90);
    // 0x000330: 0x59A0010000970902 Ffma
    temp_93 = fma(temp_86, temp_86, temp_91);
    // 0x000338: 0x5080000000570D0D Mufu
    temp_94 = inversesqrt(temp_92);
    // 0x000348: 0x59A0010000870801 Ffma
    temp_95 = fma(temp_87, temp_87, temp_93);
    // 0x000350: 0x5080000000570102 Mufu
    temp_96 = inversesqrt(temp_95);
    // 0x000358: 0x5C68100000D7030F Fmul
    temp_97 = temp_82 * temp_94;
    // 0x000368: 0x5C68100000D70B03 Fmul
    temp_98 = temp_89 * temp_94;
    // 0x000370: 0x5C68100000270521 Fmul
    temp_99 = temp_85 * temp_96;
    // 0x000378: 0x5C6810000027090B Fmul
    temp_100 = temp_86 * temp_96;
    // 0x000388: 0x5C68100000270820 Fmul
    temp_101 = temp_87 * temp_96;
    // 0x000390: 0x5C68100000D70C05 Fmul
    temp_102 = temp_75 * temp_94;
    // 0x000398: 0x5C68100000F7040C Fmul
    temp_103 = temp_63 * temp_97;
    // 0x0003A8: 0x5C68100000472109 Fmul
    temp_104 = temp_99 * temp_63;
    // 0x0003B0: 0x5C62578000B7210D Fmnmx
    temp_105 = abs(temp_99);
    temp_106 = abs(temp_100);
    temp_107 = max(temp_105, temp_106);
    // 0x0003B8: 0x59A0048000A70B09 Ffma
    temp_108 = fma(temp_100, temp_65, temp_104);
    // 0x0003C8: 0x5C60578000D7200D Fmnmx
    temp_109 = abs(temp_101);
    temp_110 = max(temp_109, temp_107);
    // 0x0003D0: 0x5080000000470D0E Mufu
    temp_111 = 1.0 / temp_110;
    // 0x0003D8: 0x59A4048001E72002 Ffma
    temp_112 = fma(temp_101, temp_67, temp_108);
    temp_113 = clamp(temp_112, 0.0, 1.0);
    // 0x0003E8: 0x5C68100000272101 Fmul
    temp_114 = temp_99 * temp_113;
    // 0x0003F0: 0x5C68100000270B08 Fmul
    temp_115 = temp_100 * temp_113;
    // 0x0003F8: 0x5C68100000E7211A Fmul
    temp_116 = temp_99 * temp_111;
    // 0x000408: 0x5C68100000E70B1B Fmul
    temp_117 = temp_100 * temp_111;
    // 0x000410: 0x32A2024000070111 Ffma
    temp_118 = 0.0 - temp_63;
    temp_119 = fma(temp_114, 2.0, temp_118);
    // 0x000418: 0x5C68100000272004 Fmul
    temp_120 = temp_101 * temp_113;
    // 0x000428: 0x32A2054000070808 Ffma
    temp_121 = 0.0 - temp_65;
    temp_122 = fma(temp_115, 2.0, temp_121);
    // 0x000430: 0x59A0060000570A01 Ffma
    temp_123 = fma(temp_65, temp_102, temp_103);
    // 0x000438: 0x5C69100000E7201C Fmul
    temp_124 = 0.0 - temp_111;
    temp_125 = temp_101 * temp_124;
    // 0x000448: 0x5C98078001A7000C Mov
    // 0x000450: 0x5C98078001B7000D Mov
    // 0x000458: 0x32A20F4000070413 Ffma
    temp_126 = 0.0 - temp_67;
    temp_127 = fma(temp_120, 2.0, temp_126);
    // 0x000468: 0x5C62578000871104 Fmnmx
    temp_128 = abs(temp_119);
    temp_129 = abs(temp_122);
    temp_130 = max(temp_128, temp_129);
    // 0x000470: 0x5C98078001C7000E Mov
    // 0x000478: 0x5C60578000471309 Fmnmx
    temp_131 = abs(temp_127);
    temp_132 = max(temp_131, temp_130);
    // 0x000488: 0x4C98079406270004 Mov
    // 0x000490: 0x508000000047090A Mufu
    temp_133 = 1.0 / temp_132;
    // 0x000498: 0x4C6810180A070404 Fmul
    temp_134 = fp_c5.data[24].z * fp_c6.data[40].x;
    // 0x0004A8: 0xE043FF914007FF09 Ipa
    temp_135 = in_attr9.y;
    // 0x0004B0: 0x5C68100000A71111 Fmul
    temp_136 = temp_119 * temp_133;
    // 0x0004B8: 0x386013BF80070404 Fmnmx
    temp_137 = min(temp_134, 1.0);
    // 0x0004C8: 0x5C68100000A70812 Fmul
    temp_138 = temp_122 * temp_133;
    // 0x0004D0: 0xE043FF910007FF08 Ipa
    temp_139 = in_attr9.x;
    // 0x0004D8: 0x5C69100000A71313 Fmul
    temp_140 = 0.0 - temp_133;
    temp_141 = temp_127 * temp_140;
    // 0x0004E8: 0xE043FF918007FF0A Ipa
    temp_142 = in_attr9.z;
    // 0x0004F0: 0x4C60178400070404 Fmnmx
    temp_143 = max(temp_137, fp_c1.data[0].x);
    // 0x0004F8: 0x38681040E0070425 Fmul
    temp_144 = temp_143 * 7.0;
    // 0x000508: 0x386810408007041D Fmul
    temp_145 = temp_143 * 4.0;
    // 0x000510: 0xC1BA0143F2571010 Tex
    temp_146 = textureLod(fp_t_tcb_14, vec4(temp_136, temp_138, temp_141, float(1)), temp_144).xyz;
    temp_147 = temp_146.x;
    temp_148 = temp_146.y;
    temp_149 = temp_146.z;
    // 0x000518: 0xD9A20181D1C71A1A Texs
    temp_150 = textureLod(fp_t_tcb_18, vec3(temp_116, temp_117, temp_125), temp_145).xyz;
    temp_151 = temp_150.x;
    temp_152 = temp_150.y;
    temp_153 = temp_150.z;
    // 0x000528: 0xC0BA0163EFF70C0C Tex
    temp_154 = textureLod(fp_t_tcb_16, vec3(temp_116, temp_117, temp_125), 0.0).xyz;
    temp_155 = temp_154.x;
    temp_156 = temp_154.y;
    temp_157 = temp_154.z;
    // 0x000530: 0xDEBA0000C1F70808 TexB
    temp_158 = texture(fp_t_cb7_20, vec3(temp_139, temp_135, temp_142)).x;
    // 0x000538: 0xD822020242272322 Texs
    temp_159 = texture(fp_t_tcb_20, vec2(temp_41, temp_48)).xyz;
    temp_160 = temp_159.x;
    temp_161 = temp_159.y;
    temp_162 = temp_159.z;
    // 0x000548: 0x59A4008000371E1E Ffma
    temp_163 = fma(temp_67, temp_98, temp_123);
    temp_164 = clamp(temp_163, 0.0, 1.0);
    // 0x000550: 0x3859103F80070401 Fadd
    temp_165 = 0.0 - temp_143;
    temp_166 = temp_165 + 1.0;
    // 0x000558: 0x4C69101805C70F27 Fmul
    temp_167 = 0.0 - fp_c6.data[23].x;
    temp_168 = temp_97 * temp_167;
    // 0x000568: 0x5C68100000F72126 Fmul
    temp_169 = temp_99 * temp_97;
    // 0x000570: 0x0104066978D7F013 Mov32i
    // 0x000578: 0x4C69101805C72121 Fmul
    temp_170 = 0.0 - fp_c6.data[23].x;
    temp_171 = temp_99 * temp_170;
    // 0x000588: 0xF0F0000034370000 Depbar
    // 0x000590: 0x5C68100000671818 Fmul
    temp_172 = temp_13 * temp_8;
    // 0x000598: 0x5C68100000170101 Fmul
    temp_173 = temp_166 * temp_166;
    // 0x0005A8: 0x49A1139805D7050F Ffma
    temp_174 = 0.0 - fp_c6.data[23].y;
    temp_175 = fma(temp_102, temp_174, temp_168);
    // 0x0005B0: 0x59A0130000570B26 Ffma
    temp_176 = fma(temp_100, temp_102, temp_169);
    // 0x0005B8: 0x010404000007F006 Mov32i
    // 0x0005C8: 0x49A1109805D70B21 Ffma
    temp_177 = 0.0 - fp_c6.data[23].y;
    temp_178 = fma(temp_100, temp_177, temp_171);
    // 0x0005D0: 0x5C68100000771919 Fmul
    temp_179 = temp_14 * temp_9;
    // 0x0005D8: 0x5C68100000170101 Fmul
    temp_180 = temp_173 * temp_173;
    // 0x0005E8: 0x49A5079805E7030F Ffma
    temp_181 = 0.0 - fp_c6.data[23].z;
    temp_182 = fma(temp_98, temp_181, temp_175);
    temp_183 = clamp(temp_182, 0.0, 1.0);
    // 0x0005F0: 0x1E23E468DB97020A Fmul32i
    temp_184 = temp_113 * 0.193900004;
    // 0x0005F8: 0x0103F0000007F009 Mov32i
    // 0x000608: 0x59A4130000372003 Ffma
    temp_185 = fma(temp_101, temp_98, temp_176);
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x000610: 0x49A5109805E72020 Ffma
    temp_187 = 0.0 - fp_c6.data[23].z;
    temp_188 = fma(temp_101, temp_187, temp_178);
    temp_189 = clamp(temp_188, 0.0, 1.0);
    // 0x000618: 0x49A2098400270113 Ffma
    temp_190 = fma(temp_180, fp_c1.data[0].z, -3.60299993);
    // 0x000628: 0x5C68100001471614 Fmul
    temp_191 = temp_15 * temp_10;
    // 0x000630: 0x49A005040017010A Ffma
    temp_192 = fma(temp_180, fp_c1.data[0].y, temp_184);
    // 0x000638: 0x5C68100001571715 Fmul
    temp_193 = temp_16 * temp_11;
    // 0x000648: 0x088BF05D63970A05 Fadd32i
    temp_194 = temp_192 + -0.522800028;
    // 0x000650: 0x51A009840037010A Ffma
    temp_195 = fma(temp_180, temp_190, fp_c1.data[0].w);
    // 0x000658: 0x32A004BF00070B13 Ffma
    temp_196 = fma(temp_100, 0.5, 0.5);
    // 0x000668: 0x0103E2CD9E87F00B Mov32i
    // 0x000670: 0x4C98079800870009 Mov
    // 0x000678: 0x5C6810000057021C Fmul
    temp_197 = temp_113 * temp_194;
    // 0x000688: 0x49A205840057010B Ffma
    temp_198 = fma(temp_180, fp_c1.data[1].y, -0.168799996);
    // 0x000690: 0x4C59101800470909 Fadd
    temp_199 = 0.0 - fp_c6.data[2].x;
    temp_200 = temp_199 + fp_c6.data[1].x;
    // 0x000698: 0x59A00E0000A70105 Ffma
    temp_201 = fma(temp_180, temp_195, temp_197);
    // 0x0006A8: 0x4C9807980097000A Mov
    // 0x0006B0: 0x4C98079800A7001C Mov
    // 0x0006B8: 0x5C68100000B7010B Fmul
    temp_202 = temp_180 * temp_198;
    // 0x0006C8: 0x51A0049800871309 Ffma
    temp_203 = fma(temp_196, temp_200, fp_c6.data[2].x);
    // 0x0006D0: 0x4C5C100400470505 Fadd
    temp_204 = temp_201 + fp_c1.data[1].x;
    temp_205 = clamp(temp_204, 0.0, 1.0);
    // 0x0006D8: 0x4C59101800570A0A Fadd
    temp_206 = 0.0 - fp_c6.data[2].y;
    temp_207 = temp_206 + fp_c6.data[1].y;
    // 0x0006E8: 0x4C59101800671C1C Fadd
    temp_208 = 0.0 - fp_c6.data[2].z;
    temp_209 = temp_208 + fp_c6.data[1].z;
    // 0x0006F0: 0x51A005180097130A Ffma
    temp_210 = fma(temp_196, temp_207, fp_c6.data[2].y);
    // 0x0006F8: 0x51A00E1800A71301 Ffma
    temp_211 = fma(temp_196, temp_209, fp_c6.data[2].z);
    // 0x000708: 0x010410676C97F013 Mov32i
    // 0x000710: 0x51A402040007041C Ffma
    temp_212 = fma(temp_143, temp_143, fp_c1.data[0].x);
    temp_213 = clamp(temp_212, 0.0, 1.0);
    // 0x000718: 0x49A0098400670213 Ffma
    temp_214 = fma(temp_113, fp_c1.data[1].z, 8.40400028);
    // 0x000728: 0x5C68100001C71C1C Fmul
    temp_215 = temp_213 * temp_213;
    // 0x000730: 0x51A0098400770213 Ffma
    temp_216 = fma(temp_113, temp_214, fp_c1.data[1].w);
    // 0x000738: 0x59A2018001C70321 Ffma
    temp_217 = 0.0 - temp_186;
    temp_218 = fma(temp_186, temp_215, temp_217);
    // 0x000748: 0x51A009840087021C Ffma
    temp_219 = fma(temp_113, temp_216, fp_c1.data[2].x);
    // 0x000750: 0x0103F0000007F013 Mov32i
    // 0x000758: 0x51A0108400A70321 Ffma
    temp_220 = fma(temp_186, temp_218, fp_c1.data[2].z);
    // 0x000768: 0x5080000000472121 Mufu
    temp_221 = 1.0 / temp_220;
    // 0x000770: 0x5C60138000B71C03 Fmnmx
    temp_222 = min(temp_219, temp_202);
    // 0x000778: 0x51A402040007040B Ffma
    temp_223 = fma(temp_143, temp_143, fp_c1.data[0].x);
    temp_224 = clamp(temp_223, 0.0, 1.0);
    // 0x000788: 0x32A009BF00070404 Ffma
    temp_225 = fma(temp_143, 0.5, 0.5);
    // 0x000790: 0x4C98079809070013 Mov
    // 0x000798: 0x5C6812000047041F Fmul
    temp_226 = temp_225 * 0.5;
    temp_227 = temp_226 * temp_225;
    // 0x0007A8: 0x51A1099809070213 Ffma
    temp_228 = 0.0 - fp_c6.data[36].x;
    temp_229 = fma(temp_113, temp_228, fp_c6.data[36].x);
    // 0x0007B0: 0x5080400000371313 Mufu
    temp_230 = abs(temp_229);
    temp_231 = log2(temp_230);
    // 0x0007B8: 0x5C68100002170B0B Fmul
    temp_232 = temp_224 * temp_221;
    // 0x0007C8: 0x59A1010001F70202 Ffma
    temp_233 = 0.0 - temp_227;
    temp_234 = fma(temp_113, temp_233, temp_113);
    // 0x0007D0: 0x59A1100001F72004 Ffma
    temp_235 = 0.0 - temp_227;
    temp_236 = fma(temp_189, temp_235, temp_189);
    // 0x0007D8: 0x5C68100000B70B0B Fmul
    temp_237 = temp_232 * temp_232;
    // 0x0007E8: 0x5C58100000271F1C Fadd
    temp_238 = temp_227 + temp_234;
    // 0x0007F0: 0x5C58100000471F1F Fadd
    temp_239 = temp_227 + temp_236;
    // 0x0007F8: 0x5080000000471C1C Mufu
    temp_240 = 1.0 / temp_238;
    // 0x000808: 0x01040DF760C7F004 Mov32i
    // 0x000810: 0x5080000000471F1F Mufu
    temp_241 = 1.0 / temp_239;
    // 0x000818: 0x4C68101809171302 Fmul
    temp_242 = temp_231 * fp_c6.data[36].y;
    // 0x000828: 0x4C98079809A70013 Mov
    // 0x000830: 0x49A2020400971E04 Ffma
    temp_243 = fma(temp_164, fp_c1.data[2].y, -6.98316002);
    // 0x000838: 0x5C90008000270025 Rro
    // 0x000848: 0x4C58101408171313 Fadd
    temp_244 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000850: 0x5084000000272502 Mufu
    temp_245 = exp2(temp_242);
    temp_246 = clamp(temp_245, 0.0, 1.0);
    // 0x000858: 0x5C68100000471E1E Fmul
    temp_247 = temp_164 * temp_243;
    // 0x000868: 0x01040DF760C7F004 Mov32i
    // 0x000870: 0x5C68120001F71C21 Fmul
    temp_248 = temp_240 * 0.5;
    temp_249 = temp_248 * temp_241;
    // 0x000878: 0xE043FF8B0007FF1F Ipa
    temp_250 = in_attr3.x;
    // 0x000888: 0x49A2020400970F04 Ffma
    temp_251 = fma(temp_183, fp_c1.data[2].y, -6.98316002);
    // 0x000890: 0xE043FF8B4007FF1C Ipa
    temp_252 = in_attr3.y;
    // 0x000898: 0x5C68100002170B0B Fmul
    temp_253 = temp_237 * temp_249;
    // 0x0008A8: 0x5C68100001370202 Fmul
    temp_254 = temp_246 * temp_244;
    // 0x0008B0: 0xE043FF8B8007FF13 Ipa
    temp_255 = in_attr3.z;
    // 0x0008B8: 0x5C68100000470F04 Fmul
    temp_256 = temp_183 * temp_251;
    // 0x0008C8: 0xE04BFF904007FF0F Ipa
    temp_257 = in_attr8.y;
    temp_258 = clamp(temp_257, 0.0, 1.0);
    // 0x0008D0: 0x5C68100000B7200B Fmul
    temp_259 = temp_189 * temp_253;
    // 0x0008D8: 0x4C68101402C71F07 Fmul
    temp_260 = temp_250 * fp_c5.data[11].x;
    // 0x0008E8: 0x4C68101402D71C1C Fmul
    temp_261 = temp_252 * fp_c5.data[11].y;
    // 0x0008F0: 0x5C68100001870707 Fmul
    temp_262 = temp_260 * temp_172;
    // 0x0008F8: 0x4C68101402E71316 Fmul
    temp_263 = temp_255 * fp_c5.data[11].z;
    // 0x000908: 0x4C98079406370013 Mov
    // 0x000910: 0x33A0034000070F06 Ffma
    temp_264 = fma(temp_258, -2.0, 3.0);
    // 0x000918: 0x5C68100000F70F0F Fmul
    temp_265 = temp_258 * temp_258;
    // 0x000928: 0x4C58301407B70718 Fadd
    temp_266 = 0.0 - fp_c5.data[30].w;
    temp_267 = temp_262 + temp_266;
    // 0x000930: 0x5C68100001471614 Fmul
    temp_268 = temp_263 * temp_191;
    // 0x000938: 0x5C68100000F70606 Fmul
    temp_269 = temp_264 * temp_265;
    // 0x000948: 0x5C90008001E7000F Rro
    // 0x000950: 0x51A0099407B71816 Ffma
    temp_270 = fma(temp_267, fp_c5.data[24].w, fp_c5.data[30].w);
    // 0x000958: 0x5080000000270F0F Mufu
    temp_271 = exp2(temp_247);
    // 0x000968: 0x4C58301407B71418 Fadd
    temp_272 = 0.0 - fp_c5.data[30].w;
    temp_273 = temp_268 + temp_272;
    // 0x000970: 0x4C68101803770606 Fmul
    temp_274 = temp_269 * fp_c6.data[13].w;
    // 0x000978: 0xF0F0000034170000 Depbar
    // 0x000988: 0x49A00D180857101A Ffma
    temp_275 = fma(temp_147, fp_c6.data[33].y, temp_151);
    // 0x000990: 0x5C68100001971C10 Fmul
    temp_276 = temp_261 * temp_179;
    // 0x000998: 0x49A0060400B70909 Ffma
    temp_277 = fma(temp_203, fp_c1.data[2].w, temp_155);
    // 0x0009A8: 0x49A00D9808571111 Ffma
    temp_278 = fma(temp_148, fp_c6.data[33].y, temp_152);
    // 0x0009B0: 0x4C6810180147201B Fmul
    temp_279 = temp_189 * fp_c6.data[5].x;
    // 0x0009B8: 0x59A1078000F71619 Ffma
    temp_280 = 0.0 - temp_271;
    temp_281 = fma(temp_270, temp_280, temp_271);
    // 0x0009C8: 0x49A0068400B70A0A Ffma
    temp_282 = fma(temp_210, fp_c1.data[2].w, temp_156);
    // 0x0009D0: 0x4C58301407B7100C Fadd
    temp_283 = 0.0 - fp_c5.data[30].w;
    temp_284 = temp_276 + temp_283;
    // 0x0009D8: 0x49A0070400B70101 Ffma
    temp_285 = fma(temp_211, fp_c1.data[2].w, temp_157);
    // 0x0009E8: 0x51A0099407B7180D Ffma
    temp_286 = fma(temp_273, fp_c5.data[24].w, fp_c5.data[30].w);
    // 0x0009F0: 0x1E23EA2F98371B1B Fmul32i
    temp_287 = temp_279 * 0.318309873;
    // 0x0009F8: 0x5C5810000197160E Fadd
    temp_288 = temp_270 + temp_281;
    // 0x000A08: 0x4C68101801572019 Fmul
    temp_289 = temp_189 * fp_c6.data[5].y;
    // 0x000A10: 0x51A0099407B70C0C Ffma
    temp_290 = fma(temp_284, fp_c5.data[24].w, fp_c5.data[30].w);
    // 0x000A18: 0x4C68101801672020 Fmul
    temp_291 = temp_189 * fp_c6.data[5].z;
    // 0x000A28: 0x5C90008000470013 Rro
    // 0x000A30: 0x5C5C30000FF70304 Fadd
    temp_292 = temp_222 + -0.0;
    temp_293 = clamp(temp_292, 0.0, 1.0);
    // 0x000A38: 0x5080000000271313 Mufu
    temp_294 = exp2(temp_256);
    // 0x000A48: 0x59A10D8001B70E03 Ffma
    temp_295 = 0.0 - temp_287;
    temp_296 = fma(temp_288, temp_295, temp_287);
    // 0x000A50: 0x59A1078000F70C0E Ffma
    temp_297 = 0.0 - temp_271;
    temp_298 = fma(temp_290, temp_297, temp_271);
    // 0x000A58: 0x59A1078000F70D18 Ffma
    temp_299 = 0.0 - temp_271;
    temp_300 = fma(temp_286, temp_299, temp_271);
    // 0x000A68: 0x1E23EA2F9837191B Fmul32i
    temp_301 = temp_289 * 0.318309873;
    // 0x000A70: 0x49A00E9808571212 Ffma
    temp_302 = fma(temp_149, fp_c6.data[33].y, temp_153);
    // 0x000A78: 0x5C5830000047050F Fadd
    temp_303 = 0.0 - temp_293;
    temp_304 = temp_205 + temp_303;
    // 0x000A88: 0x386C104248070C05 Fmul
    temp_305 = temp_290 * 50.0;
    temp_306 = clamp(temp_305, 0.0, 1.0);
    // 0x000A90: 0x5C58100000E70C0E Fadd
    temp_307 = temp_290 + temp_298;
    // 0x000A98: 0x5C58100001870D19 Fadd
    temp_308 = temp_286 + temp_300;
    // 0x000AA8: 0x1E23EA2F98372020 Fmul32i
    temp_309 = temp_291 * 0.318309873;
    // 0x000AB0: 0x59A109800137161C Ffma
    temp_310 = 0.0 - temp_294;
    temp_311 = fma(temp_270, temp_310, temp_294);
    // 0x000AB8: 0x5C68100000570418 Fmul
    temp_312 = temp_293 * temp_306;
    // 0x000AC8: 0x59A1098001370C1D Ffma
    temp_313 = 0.0 - temp_294;
    temp_314 = fma(temp_290, temp_313, temp_294);
    // 0x000AD0: 0x59A1098001370D13 Ffma
    temp_315 = 0.0 - temp_294;
    temp_316 = fma(temp_286, temp_315, temp_294);
    // 0x000AD8: 0x59A10D8001B70E04 Ffma
    temp_317 = 0.0 - temp_301;
    temp_318 = fma(temp_307, temp_317, temp_301);
    // 0x000AE8: 0x59A110000207190E Ffma
    temp_319 = 0.0 - temp_309;
    temp_320 = fma(temp_308, temp_319, temp_309);
    // 0x000AF0: 0x5C58100001C7161C Fadd
    temp_321 = temp_270 + temp_311;
    // 0x000AF8: 0x59A00C0000F71605 Ffma
    temp_322 = fma(temp_270, temp_304, temp_312);
    // 0x000B08: 0x4C68101808C70216 Fmul
    temp_323 = temp_254 * fp_c6.data[35].x;
    // 0x000B10: 0x5C58100001D70C1D Fadd
    temp_324 = temp_290 + temp_314;
    // 0x000B18: 0x5C58100001370D19 Fadd
    temp_325 = temp_286 + temp_316;
    // 0x000B28: 0x59A00C0000F70C0C Ffma
    temp_326 = fma(temp_290, temp_304, temp_312);
    // 0x000B30: 0x59A00C0000F70D0D Ffma
    temp_327 = fma(temp_286, temp_304, temp_312);
    // 0x000B38: 0x4C68101808E70213 Fmul
    temp_328 = temp_254 * fp_c6.data[35].z;
    // 0x000B48: 0x49A10B1408271618 Ffma
    temp_329 = 0.0 - fp_c5.data[32].z;
    temp_330 = fma(temp_323, temp_329, temp_323);
    // 0x000B50: 0x4C68101808D7020F Fmul
    temp_331 = temp_254 * fp_c6.data[35].y;
    // 0x000B58: 0x4C68101801571D02 Fmul
    temp_332 = temp_324 * fp_c6.data[5].y;
    // 0x000B68: 0x4C68101801471C1C Fmul
    temp_333 = temp_321 * fp_c6.data[5].x;
    // 0x000B70: 0x4C6810180167191D Fmul
    temp_334 = temp_325 * fp_c6.data[5].z;
    // 0x000B78: 0x49A1099408271319 Ffma
    temp_335 = 0.0 - fp_c5.data[32].z;
    temp_336 = fma(temp_328, temp_335, temp_328);
    // 0x000B88: 0x5C58100000371818 Fadd
    temp_337 = temp_330 + temp_296;
    // 0x000B90: 0xE043FF900007FF03 Ipa
    temp_338 = in_attr8.x;
    // 0x000B98: 0x4C68101408271616 Fmul
    temp_339 = temp_323 * fp_c5.data[32].z;
    // 0x000BA8: 0x5C68100000270B02 Fmul
    temp_340 = temp_259 * temp_332;
    // 0x000BB0: 0x5C68100001C70B1C Fmul
    temp_341 = temp_259 * temp_333;
    // 0x000BB8: 0x5C68100001D70B1D Fmul
    temp_342 = temp_259 * temp_334;
    // 0x000BC8: 0x49A1079408270F0B Ffma
    temp_343 = 0.0 - fp_c5.data[32].z;
    temp_344 = fma(temp_331, temp_343, temp_331);
    // 0x000BD0: 0x4C68101408271313 Fmul
    temp_345 = temp_328 * fp_c5.data[32].z;
    // 0x000BD8: 0x5C58100000E7190E Fadd
    temp_346 = temp_336 + temp_320;
    // 0x000BE8: 0x5C58100001870909 Fadd
    temp_347 = temp_277 + temp_337;
    // 0x000BF0: 0x49A00B0400C71C1C Ffma
    temp_348 = fma(temp_341, fp_c1.data[3].x, temp_339);
    // 0x000BF8: 0x4C68101408270F0F Fmul
    temp_349 = temp_331 * fp_c5.data[32].z;
    // 0x000C08: 0x5C58100000470B04 Fadd
    temp_350 = temp_344 + temp_318;
    // 0x000C10: 0xE043FF8D8007FF0B Ipa
    temp_351 = in_attr5.z;
    // 0x000C18: 0x49A0098400C71D13 Ffma
    temp_352 = fma(temp_342, fp_c1.data[3].x, temp_345);
    // 0x000C28: 0x5C58100000E70101 Fadd
    temp_353 = temp_285 + temp_346;
    // 0x000C30: 0x49A104940637090E Ffma
    temp_354 = 0.0 - fp_c5.data[24].w;
    temp_355 = fma(temp_347, temp_354, temp_347);
    // 0x000C38: 0x59A00E0001A70505 Ffma
    temp_356 = fma(temp_322, temp_275, temp_348);
    // 0x000C48: 0x49A0078400C70202 Ffma
    temp_357 = fma(temp_340, fp_c1.data[3].x, temp_349);
    // 0x000C50: 0x5C58100000470A04 Fadd
    temp_358 = temp_282 + temp_350;
    // 0x000C58: 0x59A0098001270D0D Ffma
    temp_359 = fma(temp_327, temp_302, temp_352);
    // 0x000C68: 0x49A100940637010A Ffma
    temp_360 = 0.0 - fp_c5.data[24].w;
    temp_361 = fma(temp_353, temp_360, temp_353);
    // 0x000C70: 0x4C9807980B470009 Mov
    // 0x000C78: 0x59A0028000E7070E Ffma
    temp_362 = fma(temp_262, temp_355, temp_356);
    // 0x000C88: 0x59A0010001170C02 Ffma
    temp_363 = fma(temp_326, temp_278, temp_357);
    // 0x000C90: 0x49A1021406370405 Ffma
    temp_364 = 0.0 - fp_c5.data[24].w;
    temp_365 = fma(temp_358, temp_364, temp_358);
    // 0x000C98: 0x385C103F80070701 Fadd
    temp_366 = temp_262 + 1.0;
    temp_367 = clamp(temp_366, 0.0, 1.0);
    // 0x000CA8: 0x59A0068000A7140A Ffma
    temp_368 = fma(temp_268, temp_361, temp_359);
    // 0x000CB0: 0x385C103F80071414 Fadd
    temp_369 = temp_268 + 1.0;
    temp_370 = clamp(temp_369, 0.0, 1.0);
    // 0x000CB8: 0x4C98079802A70007 Mov
    // 0x000CC8: 0x51A204980B472424 Ffma
    temp_371 = 0.0 - fp_c6.data[45].x;
    temp_372 = fma(temp_162, fp_c6.data[45].x, temp_371);
    // 0x000CD0: 0x59A0010000571005 Ffma
    temp_373 = fma(temp_276, temp_365, temp_363);
    // 0x000CD8: 0x385C103F80071004 Fadd
    temp_374 = temp_276 + 1.0;
    temp_375 = clamp(temp_374, 0.0, 1.0);
    // 0x000CE8: 0x51A204980B472323 Ffma
    temp_376 = 0.0 - fp_c6.data[45].x;
    temp_377 = fma(temp_161, fp_c6.data[45].x, temp_376);
    // 0x000CF0: 0x5C68100000A71402 Fmul
    temp_378 = temp_370 * temp_368;
    // 0x000CF8: 0x51A204980B472222 Ffma
    temp_379 = 0.0 - fp_c6.data[45].x;
    temp_380 = fma(temp_160, fp_c6.data[45].x, temp_379);
    // 0x000D08: 0x51A0039802A72424 Ffma
    temp_381 = fma(temp_372, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000D10: 0x4C98079802870007 Mov
    // 0x000D18: 0x49A501980BC70809 Ffma
    temp_382 = 0.0 - fp_c6.data[47].x;
    temp_383 = fma(temp_158, temp_382, temp_338);
    temp_384 = clamp(temp_383, 0.0, 1.0);
    // 0x000D28: 0xE043FF8BC007FF03 Ipa
    temp_385 = in_attr3.w;
    // 0x000D30: 0x4C98079802970008 Mov
    // 0x000D38: 0x5080000000370909 Mufu
    temp_386 = log2(temp_384);
    // 0x000D48: 0x5C68100000570404 Fmul
    temp_387 = temp_375 * temp_373;
    // 0x000D50: 0x5C58300002470205 Fadd
    temp_388 = 0.0 - temp_381;
    temp_389 = temp_378 + temp_388;
    // 0x000D58: 0x5C68100000E70101 Fmul
    temp_390 = temp_367 * temp_362;
    // 0x000D68: 0x51A0039802872222 Ffma
    temp_391 = fma(temp_380, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000D70: 0x51A0041802972323 Ffma
    temp_392 = fma(temp_377, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000D78: 0x49A2031803470600 Ffma
    temp_393 = 0.0 - temp_274;
    temp_394 = fma(temp_274, fp_c6.data[13].x, temp_393);
    // 0x000D88: 0x49A012180BF70507 Ffma
    temp_395 = fma(temp_389, fp_c6.data[47].w, temp_381);
    // 0x000D90: 0x5C58300002270105 Fadd
    temp_396 = 0.0 - temp_391;
    temp_397 = temp_390 + temp_396;
    // 0x000D98: 0x5C58300002370408 Fadd
    temp_398 = 0.0 - temp_392;
    temp_399 = temp_387 + temp_398;
    // 0x000DA8: 0x4C6810180317090A Fmul
    temp_400 = temp_386 * fp_c6.data[12].y;
    // 0x000DB0: 0x49A2031803570609 Ffma
    temp_401 = 0.0 - temp_274;
    temp_402 = fma(temp_274, fp_c6.data[13].y, temp_401);
    // 0x000DB8: 0x5C60178000772407 Fmnmx
    temp_403 = max(temp_381, temp_395);
    // 0x000DC8: 0x49A011180BF70505 Ffma
    temp_404 = fma(temp_397, fp_c6.data[47].w, temp_391);
    // 0x000DD0: 0x49A2031803670606 Ffma
    temp_405 = 0.0 - temp_274;
    temp_406 = fma(temp_274, fp_c6.data[13].z, temp_405);
    // 0x000DD8: 0x49A011980BF70808 Ffma
    temp_407 = fma(temp_399, fp_c6.data[47].w, temp_392);
    // 0x000DE8: 0x5C90008000A7000A Rro
    // 0x000DF0: 0x5080000000270A0A Mufu
    temp_408 = exp2(temp_400);
    // 0x000DF8: 0x5C60178000572205 Fmnmx
    temp_409 = max(temp_391, temp_404);
    // 0x000E08: 0x59A0038000670707 Ffma
    temp_410 = fma(temp_403, temp_406, temp_403);
    // 0x000E10: 0x5C60178000872308 Fmnmx
    temp_411 = max(temp_392, temp_407);
    // 0x000E18: 0x59A0028000070500 Ffma
    temp_412 = fma(temp_409, temp_394, temp_409);
    // 0x000E28: 0x4C68101402F70303 Fmul
    temp_413 = temp_385 * fp_c5.data[11].w;
    // 0x000E30: 0x59A0040000970805 Ffma
    temp_414 = fma(temp_411, temp_402, temp_411);
    // 0x000E38: 0x5C59100000770207 Fadd
    temp_415 = 0.0 - temp_378;
    temp_416 = temp_415 + temp_410;
    // 0x000E48: 0x4C58100C03870B08 Fadd
    temp_417 = temp_351 + fp_c3.data[14].x;
    // 0x000E50: 0x4C68101802B70A06 Fmul
    temp_418 = temp_408 * fp_c6.data[10].w;
    // 0x000E58: 0x5C59100000070100 Fadd
    temp_419 = 0.0 - temp_390;
    temp_420 = temp_419 + temp_412;
    // 0x000E68: 0x5C59100000570405 Fadd
    temp_421 = 0.0 - temp_387;
    temp_422 = temp_421 + temp_414;
    // 0x000E70: 0x5C68100001570303 Fmul
    temp_423 = temp_413 * temp_193;
    // 0x000E78: 0x59A0010000670702 Ffma
    temp_424 = fma(temp_416, temp_418, temp_378);
    // 0x000E88: 0x59A0008000670000 Ffma
    temp_425 = fma(temp_420, temp_418, temp_390);
    // 0x000E90: 0x59A0020000670501 Ffma
    temp_426 = fma(temp_422, temp_418, temp_387);
    // 0x000E98: 0x0103F6000007F005 Mov32i
    // 0x000EA8: 0x5C9807800FF70006 Mov
    // 0x000EB0: 0x49A37F8C03C70804 Ffma
    temp_427 = 0.0 - fp_c3.data[15].x;
    temp_428 = fma(temp_417, temp_427, -0.0);
    // 0x000EB8: 0x5C98078000370007 Mov
    // 0x000EC8: 0xE30000000007000F Exit
    out_attr0.x = temp_425;
    out_attr0.y = temp_426;
    out_attr0.z = temp_424;
    out_attr0.w = temp_423;
    out_attr1.x = temp_428;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_423;
    return;
}
